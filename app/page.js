"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import { Typography, Box, Stack, TextField, Button } from "@mui/material";
export default function Home() {
  const [jokes, setJokes] = useState([]);
  const [value, setValue] = useState("");
  const getJokes = async () => {
    const response = await fetch("/api/GenerateJokes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ num: value }),
    });
    const data = await response.json();
    console.log(data);
    const jokes = data.jokes;
    console.log(jokes);
    const retrievedJokesArray = jokes.split("`");

    setJokes(retrievedJokesArray);
  };

  return (
    <Stack>
      <TextField
        placeholder="Number of Jokes required:"
        value={value}
        onChange={(e) => setValue(e.target.value)}></TextField>
      <Button onClick={getJokes}>Generate Jokes</Button>
      {jokes.map((joke) => (
        <Typography key={joke}>{joke}</Typography>
      ))}
    </Stack>
  );
}
