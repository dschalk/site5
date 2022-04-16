import { c as create_ssr_component, e as escape } from "../../../chunks/index-63796eb4.js";
const Score = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  var Main = `{-# LANGUAGE OverloadedStrings, TemplateHaskell #-}
import Data.Char (isPunctuation, isSpace)
import Data.Monoid (mappend)
import Data.Text (Text)
import Control.Exception (finally)
import Control.Monad (forM_, forever)
import Control.Concurrent
import Control.Monad.IO.Class (liftIO)
import qualified Data.Text as T
import qualified Data.Text.IO as T
import qualified Network.WebSockets as WS
import qualified Network.Wai
import qualified Network.Wai.Handler.Warp as Warp
import qualified Network.Wai.Handler.WebSockets as WaiWS
import qualified Network.Wai.Application.Static as Static
import Data.FileEmbed (embedDir)
import Fm hiding (main)
import Data.List (intersperse)
import Control.Exception.Base (mask_)
import Data.List.Split (splitOn)
-- import System.Environment (getEnv)
type Name = Text
type Score = Int
type Group = Text
type Client = (Name, Score, Group, WS.Connection)
type ServerState = [Client]

fw :: [String] -> Text
fw x = case x of
    [_,b,_] -> T.pack b
    [_,b,_,_] -> T.pack b
    [_,b,_,_,_,_,_,_] -> T.pack b
    [_,b,_,_,_,_,_] -> T.pack b
    _ -> T.pack "fw malfunctioned"

fx :: [String] -> Text
fx x = case x of
    [_,_,c] -> T.pack c
    [_,_,c,_] -> T.pack c
    [_,_,c,_,_,_,_,_] -> T.pack c
    [_,_,c,_,_,_,_] -> T.pack c
    _ -> T.pack "fx malfunctioned"

fy :: [String] -> Text
fy x = case x of
    [_,_,_,d] -> T.pack d
    [_,_,_,d,_,_,_,_] -> T.pack d
    [_,_,_,d,_,_,_] -> T.pack d
    _ -> T.pack "fy malfunctioned"

gG :: ServerState -> Group
gG [a] = getGroup a
gG _   = "Error Group"


allGroups :: ServerState -> Text 
allGroups (x:xs)  | length (x:xs) == 0  = "" 
                  | length (x:xs) == 1  = gG (x:xs)
                  | length (x:xs) > 1   = ((getGroup x) \`mappend\` "<br>") \`mappend\` (allGroups xs)

froll :: [String] -> [Double]
froll [_,_,_,a,b,c,d,e] = map read [a, b, c, d, e]
froll _ = [1.0,2.0,3.0,4.0]

fw3 :: [String] -> Text
fw3 [_,b,_,_,_,_,_,_] = T.pack b
fw3 _ = T.pack "EE#$42"

fx3 :: [String] -> Text
fx3 [_,_,c,_,_,_,_,_] = T.pack c
fx3 _ = T.pack "EE#$42"

get4 :: [String] -> [Int]
get4 [_,_,_,a,b,c,d] = fmap read [a,b,c,d]
get4 _ = [-1,-1,-1,-1]

get4Group :: [String] -> Text
get4Group [_,b,_,_,_,_,_] = T.pack b
get4Group _ = "get4Group error"

get4Player :: [String] -> Text
get4Player [_,_,c,_,_,_,_] = T.pack c
get4Player _ = "get4Player error"

getName :: Client -> Name
getName (a,_,_,_) = a

getGroup :: Client -> Text
getGroup (_,_,c,_) = c

filterGroup :: Text -> ServerState -> [Text]
filterGroup group s = [ a \`mappend\` " _ " \`mappend\` T.pack (show b)
    \`mappend\` " _ " \`mappend\` c | (a,b,c,d) <- s, group == c]

newGroup :: Text -> Text -> Client -> Client
newGroup name group (a, b, c, d)   | name == a  = (a, b, group, d)
                                   | otherwise = (a, b, c, d)

changeGroup :: Text -> Text -> ServerState -> ServerState
changeGroup name group = map (newGroup name group)

incFunc :: Text -> Client -> Client
incFunc x (a, b, c, d)   | x == a   = (a, b + 1, c, d)
                         | otherwise = (a, b, c, d)

decFunc :: Text -> Client -> Client
decFunc x (a, b, c, d)   | x == a   = (a, b - 1, c, d)
                         | otherwise = (a, b, c, d)

decFunc2 :: Text -> Client -> Client
decFunc2 x (a, b, c, d)   | x == a   = (a, b - 2, c, d)
                          | otherwise = (a, b, c, d)

upScore :: Text -> ServerState -> ServerState
upScore name = map (incFunc name)

downScore :: Text -> ServerState -> ServerState
downScore name = map (decFunc name)

downScore2 :: Text -> ServerState -> ServerState
downScore2 name = map (decFunc2 name)

newServerState :: ServerState
newServerState = []

matches :: Text -> ServerState -> [Client]
matches a ss = [ x | x <- ss, getName x == a]

notMatches :: Text -> ServerState -> ServerState
notMatches a ss = [ x | x <- ss, getName x /= a]

clientExists :: Text -> ServerState -> Bool
clientExists a ss  | null (matches a ss)   = False
                   | otherwise             = True

addClient :: Client -> ServerState -> ServerState
addClient client clients = client : clients

removeClient :: Client -> ServerState -> ServerState
removeClient client = filter ((/= getName client) . getName)

broadcast :: Text -> ServerState -> IO ()
broadcast message clients = do 
    T.putStrLn message 
    forM_ clients $ (_ , _, _, conn) -> WS.sendTextData conn message

main :: IO ()
main = do
    putStrLn "http://localhost:3055/client.html"
    state <- newMVar newServerState
    Warp.runSettings
      (Warp.setPort 3055 Warp.defaultSettings)
      $ WaiWS.websocketsOr WS.defaultConnectionOptions (application state) staticApp
staticApp :: Network.Wai.Application
staticApp = Static.staticApp $ Static.embeddedSettings $(embedDir "static")

application :: MVar ServerState -> WS.ServerApp
application state pending = do
    print "Main.hs in score3 is up and running"
    conn <- WS.acceptRequest pending
    msg <- WS.receiveData conn
    clients <- liftIO $ readMVar state
    case msg of
        _   | not (prefix \`T.isPrefixOf\` msg) ->
                WS.sendTextData conn ("Wrong announcement" :: Text)
            | any ($ getName client)
                [T.null, T.any isPunctuation, T.any isSpace] ->
                    WS.sendTextData conn ("Name cannot " \`mappend\`
                        "contain punctuation or whitespace, and " \`mappend\`
                        "cannot be empty" :: Text)
            | clientExists (getName client) clients ->
                WS.sendTextData conn ("User already exists" :: Text)
            | otherwise -> flip finally disconnect $ do
                liftIO $ modifyMVar_ state $ s -> do
                    let s' = addClient client s
                    WS.sendTextData conn $ T.pack "CC#$42"
                    broadcast (getName client \`mappend\` " joined") s'
                    return s'
                talk conn state client
         where
                prefix     = "CC#$42"
                client     = (T.drop (T.length prefix) msg, 0, T.pack "private", conn)
                disconnect = modifyMVar state $ s ->
                     let s' = removeClient client s in return (s', s') 


talk :: WS.Connection -> MVar ServerState -> Client -> IO ()
talk conn state (user, _, _, _) = forever $ do
    msg <- WS.receiveData conn
    let msgArray = splitOn "," (T.unpack msg)

    let group = fw msgArray
    let sender = fx msgArray
    let extra = fy msgArray

    let group3 = fw3 msgArray
    let sender3 = fx3 msgArray

    let range = get4 msgArray  -- 7 items in msgArray
    let player4 = get4Player msgArray
    let group4 = get4Group msgArray 

    print "****************************msgArray next: "
    mapM_ print msgArray
    print "****************************That was msgArray"
    if "CA#$42" \`T.isPrefixOf\` msg
        then
            do
                st <- readMVar state
                z <- rText range
                broadcast ("CA#$42," \`mappend\` group4 \`mappend\` ","
                    \`mappend\` player4 \`mappend\` "," \`mappend\` z) st 

    else if "CZ#$42" \`T.isPrefixOf\` msg
            then do
                y <- liftIO $ truck $ froll msgArray
                let yzz = T.pack y
                st <- readMVar state
                broadcast ("CZ#$42," \`mappend\` group3 \`mappend\` ","
                    \`mappend\` sender3 \`mappend\` "," \`mappend\` yzz) st

    else if "CW#$42" \`T.isPrefixOf\` msg
            then do
                y <- liftIO $ truck $ froll msgArray
                let zz = T.pack y
                st <- readMVar state
                broadcast ("CW#$42," \`mappend\` group3 \`mappend\` ","
                    \`mappend\` sender3 \`mappend\` "," \`mappend\` zz) st

    else if "CC#$42" \`T.isPrefixOf\` msg || "CE#$42" \`T.isPrefixOf\` msg || "CF#$42" \`T.isPrefixOf\` msg ||
        "CH#$42" \`T.isPrefixOf\` msg || "CJ#$42" \`T.isPrefixOf\` msg || "CK#$42" \`T.isPrefixOf\` msg ||
        "CP#$42" \`T.isPrefixOf\` msg || "CQ#$42" \`T.isPrefixOf\` msg || "CS#$42" \`T.isPrefixOf\` msg ||
        "CY#$42" \`T.isPrefixOf\` msg || "CR#$42" \`T.isPrefixOf\` msg || "CD#$42" \`T.isPrefixOf\` msg
        then
            do
                st <- readMVar state
                broadcast msg st

    else if "CG#$42" \`T.isPrefixOf\` msg
    then
        mask_ $ do
            old <- takeMVar state
            let new = upScore sender old
            putMVar state new
            broadcast msg new
            broadcast ("CB#$42," \`mappend\` group \`mappend\` ","
                \`mappend\` sender \`mappend\` "," \`mappend\` T.concat (intersperse "<br>" (filterGroup group new))) new 

    else if "CI#$42" \`T.isPrefixOf\` msg
        then
            mask_ $ do
                old <- takeMVar state
                let new = downScore sender old
                putMVar state new
                broadcast msg new
                broadcast ("CB#$42," \`mappend\` group \`mappend\` ","
                    \`mappend\` sender \`mappend\` "," \`mappend\` T.concat (intersperse "<br>" (filterGroup group new))) new

    else if "CL#$42" \`T.isPrefixOf\` msg
        then
            mask_ $ do
                old <- takeMVar state
                let new = downScore sender old
                putMVar state new
                broadcast msg new
                broadcast ("CB#$42," \`mappend\` group \`mappend\` ","
                    \`mappend\` sender \`mappend\` "," \`mappend\` T.concat (intersperse "<br>" (filterGroup group new))) new
                    
    else if "CM#$42" \`T.isPrefixOf\` msg
        then
            mask_ $ do
                old <- takeMVar state
                let new = upScore sender old
                putMVar state new
                st2 <- readMVar state
                broadcast msg st2
                broadcast ("CB#$42," \`mappend\` group \`mappend\` ","
                    \`mappend\` sender \`mappend\` "," \`mappend\` T.concat (intersperse "<br>" (filterGroup group st2))) st2

    else if "CN#$42" \`T.isPrefixOf\` msg
        then
            mask_ $ do
                old <- takeMVar state
                let new = downScore2 extra old
                putMVar state new
                broadcast msg new
                broadcast ("CB#$42," \`mappend\` group \`mappend\` ","
                    \`mappend\` sender \`mappend\` "," \`mappend\` T.concat (intersperse "<br>" (filterGroup group new))) new
                
    else if "CO#$42" \`T.isPrefixOf\` msg
        then
            mask_ $ do
                old <- takeMVar state
                let new = changeGroup sender group old
                putMVar state new
                broadcast msg new
                broadcast ("CB#$42," \`mappend\` group \`mappend\` ","
                    \`mappend\` sender \`mappend\` "," \`mappend\` T.concat (intersperse "<br>" (filterGroup group new))) new
                broadcast ("CO#$42," \`mappend\` group \`mappend\` ","
                    \`mappend\` sender \`mappend\` "," \`mappend\` extra) new 
                broadcast ("DB#$42," \`mappend\` "pass" \`mappend\` "," \`mappend\` sender \`mappend\` "," \`mappend\` (allGroups new)) new


    else if "SU#$42" \`T.isPrefixOf\` msg
        then
            do
                st <- readMVar state
                broadcast ("DU#$42," \`mappend\` group \`mappend\` ","
                    \`mappend\` sender \`mappend\` "," \`mappend\` extra) st

    else
            do
                print "Hello Jackie" `;
  var Fm = `{-# LANGUAGE OverloadedStrings #-}
module Fm where
import           Data.List
import qualified Data.Text     as T
import           System.Random

toDouble :: Int -> Double
toDouble x = (read (show x)) :: Double

rM :: Int -> IO Int
rM x = getStdRandom (System.Random.randomR ((1,x) :: (Int,Int)))

start :: Int -> Int -> Int -> Int -> IO [Int]
start ax bx cx dx = do
    a <- rM ax
    b <- rM bx
    c <- rM cx
    d <- rM dx
    return [a,b,c,d]

rollFunc :: [String] -> T.Text
rollFunc [a,b,c,d] = T.pack (a ++ "," ++ b ++ "," ++ c ++ "," ++ d)
rollFunc _ = "Problem in rollFunc"


rollT :: Int -> Int -> Int -> Int -> IO T.Text
rollT ax bx cx dx = do
    x <- start ax bx cx dx
    let y = map show x
    return $ rollFunc y

roll :: Int -> Int -> Int -> Int -> IO [Double]
roll ax bx cx dx = do
    x <- start ax bx cx dx
    return $ map toDouble x

computation :: Double -> String -> Double -> Double
computation a b c  | b == "+"   = (+) a c
                   | b == "-"   = (-) a c
                   | b == "*"   = (*) a c
                   | b == "/"   = scoreDiv a c
                   | b == "Concatenate"  = cat a c
                   | otherwise = 5000

fRound :: Double -> Int
fRound = round

notWhole :: Double -> Bool
notWhole x = toDouble (fRound x) /= x

cat :: Double -> Double -> Double
cat l m   | m < 0  = 3.1
          | l == 0  = 3.1
          | notWhole l  = 3.1
          | notWhole m  = 3.1
          | otherwise  = read ((show $ fRound l) ++ (show $ fRound m)) :: Double

g :: (Double -> Double -> Double) -> String
g x         | x 3 2 == 5 = " + "
            | x 3 2 == 1 = " - "
            | x 3 2 == 6 = " * "
            | x 18 3 == 6 = " / "
            | x 5 5 == 55 = " concatenated left of "
            | otherwise = " cow "

f :: Double -> String
f x = show (fRound x)

scoreDiv :: Double -> Double -> Double
scoreDiv az bz  | bz == 0  = 99999
                | otherwise = (/) az bz

ops :: [Double -> Double -> Double]
ops =  [cat, (+), (-), (*), scoreDiv]

calc :: Double -> Double -> Double -> Double -> Double -> [(String, String, String, String, String, String)]
calc a b c d e = [(f a', g op1, f b', g op2, f c', show e) |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- ops,
                            op2 <- ops,
                            op2 (op1 a' b') c' == e]

calc2 :: Double -> Double -> Double -> Double -> Double -> [(String, String, String, String, String, String)]
calc2 a b c d e = [(f a', g op1, f b', g op2, f c', show e) |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- ops,
                            op2 <- ops,
                            op2 a' (op1 b' c') == e]

calc3 :: Double -> Double -> Double -> Double -> Double -> [(String, String, String, String, String, String, String, String)]
calc3 a b c d e = [(f a', g op1, f b', g op3, f c', g op2, f d', show e) |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- ops,
                            op2 <- ops,
                            op3 <- ops,
                            op3 (op1 a' b') (op2 c' d') == e]

calc4 :: Double -> Double -> Double -> Double -> Double ->[(String, String, String, String, String, String, String, String)]
calc4 a b c d e = [(f a', g op1, f b', g op3, f c', g op2, f d', show e) |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- ops,
                            op2 <- ops,
                            op3 <- ops,
                            op3 (op2 (op1 a' b') c') d' == e]

calc5 :: Double
           -> Double
           -> Double
           -> Double
           -> Double
           -> [(String, String, String, String, String, String, String, String)]
calc5 a b c d e = [(f a', g op1, f b', g op3, f c', g op2, f d', show e) |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- ops,
                            op2 <- ops,
                            op3 <- ops,
                            op3 (op2 c' (op1 a' b')) d' == e]

calc6 :: Double
           -> Double
           -> Double
           -> Double
           -> Double
           -> [(String, String, String, String, String, String, String, String)]
calc6 a b c d e = [(f a', g op1, f b', g op3, f c', g op2, f d', show e) |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- ops,
                            op2 <- ops,
                            op3 <- ops,
                            op3 d' (op2 (op1 a' b') c') == e]

calc7 :: Double
           -> Double
           -> Double
           -> Double
           -> Double
           -> [(String, String, String, String, String, String, String, String)]
calc7 a b c d e = [(f a', g op1, f b', g op3, f c', g op2, f d', show e) |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- ops,
                            op2 <- ops,
                            op3 <- ops,
                            op3 d' (op2 c' (op1 a' b')) == e]

h :: (String, String, String, String, String, String) -> String
h (a',b',c',d',e',goal) = "(" ++ a' ++ b' ++ c' ++ ")" ++ d' ++ e' ++ " = " ++ goal ++ "<br>"

h2 :: (String, String, String, String, String, String) -> String
h2 (a',b',c',d',e', goal) = a' ++ d' ++  "(" ++ c' ++ b' ++ e'++ ") = " ++ goal ++ "<br>  "

h3 :: (String, String, String, String, String, String, String, String) -> String
h3 (a',b',c',d',e',f',g', goal) = "(" ++ a' ++ b' ++ c' ++ ")"  ++ d' ++ "(" ++ e' ++ f' ++
                            g' ++ ") = " ++ goal ++ "<br>  "

h4 :: (String, String, String, String, String, String, String, String) -> String
h4 (a',b',c',d',e',f',g', goal) = "((" ++ a' ++ b' ++ c' ++ ")" ++
    f' ++ e' ++ ")" ++ d' ++ g' ++ ") = " ++ goal ++ "<br>  "

h5 :: (String, String, String, String, String, String, String, String) -> String
h5 (a',b',c',d',e',f',g', goal) = "(" ++ e' ++ f' ++ "(" ++ a' ++
  b' ++ c' ++ "))" ++ d' ++ g' ++ ") = " ++ goal ++ "<br>  "

h6:: (String, String, String, String, String, String, String, String) -> String
h6 (a',b',c',d',e',f',g', goal) = g' ++ d' ++ "((" ++ a' ++ b' ++
  c' ++ ")" ++ f' ++ e' ++ ") = " ++ goal ++ "<br>  "

h7 :: (String, String, String, String, String, String, String, String) -> String
h7 (a',b',c',d',e',f',g', goal) = g' ++ d' ++ "(" ++ e' ++ f' ++
  "(" ++ a' ++ b' ++ c' ++ ")) = " ++ goal ++ "<br>  "

pim ::  [(String, String, String, String, String, String, String, String)] -> [String]
pim x  | null x  = [" -- There are no solutions in this category"]
       | otherwise  = [" "]


pim' ::  [(String, String, String, String, String, String)] -> [String]
pim' x  | null x  = [" -- There are no solutions in this category"]
       | otherwise  = [" "]

ca :: [Double] -> [String]
ca [a, b, c, d, e] = ["Using the result from two numbers left of a third.<br>"] ++
    map h (calc a b c d e) ++
    pim' (calc a b c d e) ++
    ["<br><br>Using a number left of the result obtained from two other numbers.<br>"] ++
    map h2 (calc2 a b c d e) ++
    pim' (calc2 a b c d e) ++
    ["<br><br>Using two numbers and then the remaining two numbers - then using those results.<br>"] ++
    map h3 (calc3 a b c d e) ++
    pim (calc3 a b c d e) ++
    ["<br><br>Using the result from two numbers left of a third - then that result left of the remaining number.<br>"] ++
    map h4 (calc4 a b c d e) ++
    pim (calc4 a b c d e) ++
    ["<br><br>Using the third number left of the result obtained from the first two - then that result left of the fourth number.<br>"] ++
    map h5 (calc5 a b c d e) ++
    pim (calc5 a b c d e) ++
    ["<br><br>Using the the remaining number to the left of the result of using the result of two numbers' left of another.<br>"] ++
    map h6 (calc6 a b c d e) ++
    pim (calc6 a b c d e) ++
    ["<br><br>Using the remaining number to the left of the result from using the a number left of the result from two others.<br>"] ++
    map h7 (calc7 a b c d e) ++
    pim (calc7 a b c d e)
ca _ = ["What?"]

cars :: [Double] -> String
cars [a,b,c,d,e] = concat $ ca [a,b,c,d,e]
cars _ = []

tru :: T.Text -> [Double]
tru x = map read (map T.unpack (T.split (==',') x))

truck :: [Double] -> IO String
truck x = do
    let y = map round x
    let z = show (y !! 0) ++ " " ++ show (y !! 1) ++ " " ++ show (y !! 2) ++ " " ++  show (y !! 3) ++ "<br><br>"
    let a = (" " ++ z ++ (cars x) ++ "<br>") :: String
    return a

arg :: [Double]
arg = [1,1,1,1,42]

rText :: [Int] -> IO T.Text
rText [a,b,c,d] = do
    x <- roll a b c d
    return $ rollFunc $ map show $ map round x
rText _ = return $ T.pack "String"

main :: IO ()
main = rText [111,111,111,111] >>= print `;
  var Impossibles = `{-# LANGUAGE OverloadedStrings #-}

import Data.List
import System.CPUTime

notWhole :: Double -> Bool
notWhole x = fromIntegral (round x) /= x

cat :: Double -> Double -> Double
cat l m   | m < 0  = 3.1
          | l == 0  = 3.1
          | notWhole l  = 3.1
          | notWhole m  = 3.1
          | otherwise  = read (show (round l) ++ show (round m))

f :: Double -> String
f x = show (round x)

scoreDiv :: (Eq a, Fractional a) => a -> a -> a
scoreDiv az bz  | bz == 0  = 99999
                | otherwise = (/) az bz

calc :: Double -> Double -> Double -> Double -> [(Double, Double, Double, Double)]
calc a b c d = [ (a',b',c',d') |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- [cat, (+), (-), (*), scoreDiv],
                            op2 <- [cat, (+), (-), (*), scoreDiv],
                            op2 (op1 a' b') c' == 20]

calc2 :: Double -> Double -> Double -> Double -> [(Double, Double, Double, Double)]
calc2 a b c d = [ (a',b',c',d') |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- [cat, (+), (-), (*), scoreDiv],
                            op2 <- [cat, (+), (-), (*), scoreDiv],
                            op2 a' (op1 b' c') == 20]

calc3 :: Double -> Double -> Double -> Double -> [(Double, Double, Double, Double)]
calc3 a b c d = [ (a',b',c',d') |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- [cat, (+), (-), (*), scoreDiv],
                            op2 <- [cat, (+), (-), (*), scoreDiv],
                            op3 <- [cat, (+), (-), (*), scoreDiv],
                            op3 (op1 a' b') (op2 c' d') == 20]

calc4 :: Double -> Double -> Double -> Double -> [(Double, Double, Double, Double)]
calc4 a b c d = [ (a',b',c',d')  |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- [cat, (+), (-), (*), scoreDiv],
                            op2 <- [cat, (+), (-), (*), scoreDiv],
                            op3 <- [cat, (+), (-), (*), scoreDiv],
                            op3 (op2 (op1 a' b') c') d' == 20]

calc5 a b c d = [ (a',b',c',d') |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- [cat, (+), (-), (*), scoreDiv],
                            op2 <- [cat, (+), (-), (*), scoreDiv],
                            op3 <- [cat, (+), (-), (*), scoreDiv],
                            op3 (op2 a' (op1 b' c')) d' == 20]

calc6 a b c d = [ (a',b',c',d') |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- [cat, (+), (-), (*), scoreDiv],
                            op2 <- [cat, (+), (-), (*), scoreDiv],
                            op3 <- [cat, (+), (-), (*), scoreDiv],
                            op3 a' (op2 (op1 b' c') d') == 20]

calc7 a b c d = [ (a',b',c',d') |
                        [a',b',c',d'] <- nub(permutations [a,b,c,d]),
                            op1 <- [cat, (+), (-), (*), scoreDiv],
                            op2 <- [cat, (+), (-), (*), scoreDiv],
                            op3 <- [cat, (+), (-), (*), scoreDiv],
                            op3 a' (op2 b' (op1 c' d')) == 20]

impossibles = [ [round a, round b, round c, round d] | a <- [1..6], b <- [1..6], c <- [1..12], d <- [1..20], 
                     a <= b, b <= c, c <= d,
                     null $ calc a b c d, null $ calc2 a b c d, null $ calc3 a b c d, 
                     null $ calc4 a b c d, null $ calc5 a b c d, null $ calc6 a b c d, 
                     null $ calc7 a b c d ]

main = do 
    t1 <- getCPUTime 
    mapM_ print impossibles
    t2 <- getCPUTime
    let t = fromIntegral (t2-t1) * 1e-12
    print t `;
  var all = `[1,1,1,4]
[1,1,1,5]
[1,1,1,6]
[1,1,1,7]
[1,1,1,12]
[1,1,1,13]
[1,1,1,14]
[1,1,1,15]
[1,1,1,16]
[1,1,5,11]
[1,1,5,12]
[1,1,6,11]
[1,1,7,8]
[1,1,8,15]
[1,1,11,12]
[1,1,11,14]
[1,1,11,15]
[1,1,11,16]
[1,1,11,17]
[1,1,12,13]
[1,1,12,15]
[1,1,12,17]
[1,4,7,19]
[1,4,7,20]
[1,4,11,11]
[1,4,11,18]
[1,4,11,19]
[1,4,12,14]
[1,4,12,19]
[1,4,12,20]
[1,5,6,6]
[1,5,6,7]
[1,5,6,17]
[1,5,8,9]
[1,5,9,19]
[1,5,11,12]
[1,5,11,17]
[1,5,11,19]
[1,5,12,20]
[1,6,6,11]
[1,6,9,19]
[1,6,11,17]
[1,6,11,19]
[1,6,12,12]
[2,3,9,18]
[2,4,9,11]
[2,6,9,11]
[2,6,9,18]
[3,3,3,3]
[3,3,3,4]
[3,3,3,12]
[3,3,3,15]
[3,3,5,17]
[3,3,8,8]
[3,3,8,17]
[3,3,9,9]
[3,3,12,12]
[3,4,9,9]
[3,4,11,11]
[3,5,9,11]
[3,5,11,19]
[3,6,6,15]
[3,6,7,13]
[4,4,5,13]
[4,4,5,18]
[4,4,7,10]
[4,4,7,18]
[4,4,8,15]
[4,4,10,13]
[4,4,10,17]
[4,4,11,14]
[4,4,11,18]
[4,5,5,18]
[4,5,6,12]
[4,5,9,18]
[4,5,12,14]
[4,6,8,20]
[4,6,9,12]
[4,6,12,19]
[4,6,12,20]
[5,5,8,14]
[5,5,11,17]
[5,5,11,18]
[5,6,6,17]
[5,6,11,11]
[5,6,11,12]
[5,6,11,17]
[5,6,11,18]
[6,6,6,6]
[6,6,6,7]
[6,6,6,11]
[6,6,6,17]
[6,6,7,10]
[6,6,7,11]
[6,6,7,17]
[6,6,9,9]
[6,6,9,13]
[6,6,10,13]
[6,6,10,15]
[6,6,10,17]
[6,6,11,11]
[6,6,11,12]
[6,6,11,17]
[6,6,12,15] `;
  return `${$$result.head += `${$$result.title = `<title>The Game of Score</title>`, ""}`, ""}

<div style="${"font-family: Times New Roman; text-align: center; font-size: 38px;"}"><br>
  The Game of Score
</div>

<p>This page displays the Haskell programming language code that can display unique simulated rolls of the dice and keep score in each of arbitrarily many groups of people playing and chatting among themselves. It can display every possible way a roll of dice -- two six-sided, one twelve-sided and one twenty-sided by default-- can produce the number 20 through addition, subtraction, multiplication, division, and concatination. You can see it in action at <a href="${"https://score.schalk.net"}">The Game of Score</a></p>

<p>Main.hs, the center of the WebSockets back end, imports whole packages when all it needs is one or two of the functions they contain. It and its helper modules aren&#39;t annotated. The JavaScript front end is build on React, a framework I abandoned long ago. It too could use some refactoring, or else re-writing in this SvelteKit framework. I won&#39;t let sprucing up the Game of Score interfere with other things I&#39;m doing right now, but maybe later.</p>
<p>The work I did was for my young son Alex, a little grade school boy back then. He&#39;s twenty-years-old now.</p>

<p>I admit I&#39;m pretty sentimental about this game. I remember Alex&#39;s asking me if I could compute all possible solutions to all possible rolls of the dice. I said I didn&#39;t think so, but then I did it, more to my surprise than Alex&#39;s. Then I computed the short list of rolls that couldn&#39;t make the number 20, the &quot;impossibles&quot; (bellow). All of this is preserved at Github.com at <a href="${"https://github.com/dschalk/score3"}">score3</a>.</p>
    
<pre>${escape(Main)}</pre>
<br>
<p>This module, among other things, computes any solutions that exist to any particular roll of the four die.</p>
<pre>${escape(Fm)}</pre>
<br>
<pre>${escape(Impossibles)}</pre>
<p>Here&#39;s the result of running &quot;./impossibles&quot;.</p>
<pre>${escape(all)}</pre>`;
});
export { Score as default };
