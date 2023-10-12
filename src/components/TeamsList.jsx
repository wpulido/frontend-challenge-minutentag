/**
 * Given a list of teams, we need to expose the teams in different ways:
 * - Criteria 1: depending on the score, order the list from highest to lowest.
 * - Criteria 2: depending on the score, order the list from lowest to highest.
 * - Criteria 3: depending on the player's quantity, show ONLY the teams that has more than 3 players.
 *
 * What you need to implement is:
 * - 3 buttons. Each of them need to execute a criteria.
 * - The list of teams should be updated dynamically depending on the selected filter.
 * - Each team item should display: Team Name / Player’s quantity / Total Score of each team.
 */

import { useState } from "react";

const TEAMS = [
  {
    name: "Red",
    players: ["Robin", "Rey", "Roger", "Richard"],
    games: [
      {
        score: 10,
        city: "LA",
      },
      {
        score: 1,
        city: "NJ",
      },
      {
        score: 3,
        city: "NY",
      },
    ],
  },
  {
    name: "Blue",
    players: ["Bob", "Ben"],
    games: [
      {
        score: 6,
        city: "CA",
      },
      {
        score: 3,
        city: "LA",
      },
    ],
  },
  {
    name: "Yellow",
    players: ["Yesmin", "Yuliana", "Yosemite"],
    games: [
      {
        score: 2,
        city: "NY",
      },
      {
        score: 4,
        city: "LA",
      },
      {
        score: 7,
        city: "AK",
      },
    ],
  },
];

export function TeamsList() {
  const [teams, setTeams] = useState(TEAMS);

  // Order teams by score (highest to lowest)
  function orderTeamByScoreHighestToLowest() {
    // Write your code here
    const sortedTeams = [...teams].sort((a, b) => {
      const totalScoreA = a.games.reduce((acc, game) => acc + game.score, 0);
      const totalScoreB = b.games.reduce((acc, game) => acc + game.score, 0);
      return totalScoreB - totalScoreA;
    });
    setTeams(sortedTeams);
  }

  // Order teams by score (lowest to highest)
  function orderTeamByScoreLowestToHighest() {
    // Write your code here
    const sortedTeams = [...teams].sort((a, b) => {
      const totalScoreA = a.games.reduce((acc, game) => acc + game.score, 0);
      const totalScoreB = b.games.reduce((acc, game) => acc + game.score, 0);
      return totalScoreA - totalScoreB;
    });
    setTeams(sortedTeams);
  }

  // Filtering teams that with at least 3 players
  function teamsWithMoreThanThreePlayers() {
    // Write your code here
    const filteredTeams = teams.filter((team) => team.players.length >= 3);
    setTeams(filteredTeams);
  }

  return (
    <div>
      <button onClick={() => setTeams(TEAMS)}>Initial list</button>

      <button onClick={orderTeamByScoreHighestToLowest}>Highest to Lowest</button>
      <button onClick={orderTeamByScoreLowestToHighest}>Lowest to Highest</button>
      <button onClick={teamsWithMoreThanThreePlayers}>Teams with at least 3 players</button>

      <ul className="teams">
        {/** Render the list of teams */}
        {teams.map((team, index) => (
          <li key={index}>
            Team Name: {team.name} / Players Quantity: {team.players.length} / Total Score: {team.games.reduce((acc, game) => acc + game.score, 0)}
          </li>
        ))}
      </ul>
    </div>
  );
}
