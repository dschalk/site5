     <svelte:head>
        <title>Haskell Programming Language</title>
    </svelte:head>

    <script>
    import {fade} from "svelte/transition";
    console.log("Cow");
    import { onMount } from 'svelte';

    let display = "inline";
    let display2 = "none"
    var buttonClick;
    let A = 10000;
    let B = 10000;
    let C = 10000;
    let D = 10000;
    let F = 10000;
    let G = 10000;
    let H = 10000;
    let E = "Please enter a name here for the chat app (registration is unnecessary):";
    var socket, login, handleKeydown, handleKeydown2, handleKeydown3, textEnter;

    let creatures = ["samantha"];
    let profile = ["species"]
    onMount(() => {
        socket = new WebSocket('ws://localhost:8880');
        socket.onmessage = e => {
            console.log(e);
            B = e.data;
            E = e.data;
            console.log("socket.onmessage in haskell.svelte:", B);
            // socket.send(B)
        }
        socket.onerror = e => console.log(e);

        login = function login (e) {
                if (e.keyCode == 13) {
                    E = '';
                    display = "none"
                    display2 = "inline"
                    A = e.target.value;
                    socket.send("CC#$42"+A);
                };
            };

        textEnter = function textEnter (e) {
                if (e.keyCode == 13) {
                    A = e.target.value;
                    socket.send(A);
                };
            };

        buttonClick = function buttonClick () {
            console.log("You bet, Sandy");
            F = creatures + ', ' + profile
            socket.send([creatures + "," + profile + ",ZZ#$42"]);
            };
    });
    </script>

    <div style = "font-family: Times New Roman;  text-align: center; font-size: 38px;" transition:fade>
        <br>
    Haskell Programming Language
    </div>

    <div>{A}</div>
    <div>{B}</div>
    <div>{creatures}</div>
    <div>{profile}</div>
    <div>{F}</div>
    <div>{E}</div>

    <input style = "display: {display}" type="text" on:keydown = {login} />
    <br><br>

    <input style = "display2: {display}" type="text" on:keydown = {textEnter} />
    <br><br>

    <h2>Creatures</h2>

    <label>
        <input type=radio bind:group={creatures} value={0}>
        Samantha
    </label>

    <label>
        <input type=radio bind:group={creatures} value={1}>
        Bob
    </label>

    <label>
        <input type=radio bind:group={creatures} value={2}>
        Sally
    </label>

    <label>
        <input type=radio bind:group={creatures} value={3}>
        Fido
    </label>

    <label>
        <input type=radio bind:group={creatures} value={4}>
        Alex
    </label>

    <br><br>

    <h2>Creature</h2>

    <label>
        <input type=radio bind:group={profile} value={0}>
        Species
    </label>

    <label>
        <input type=radio bind:group={profile} value={1}>
        Sex
    </label>

    <label>
        <input type=radio bind:group={profile} value={2}>
        Age
    </label>

    <button on:click = {buttonClick} >Evaluate</button>
