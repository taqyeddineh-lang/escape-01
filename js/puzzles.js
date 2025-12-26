export const missionConfig = {
    title: "Project Zeta Recovery",
    puzzles: [
        {
            id: "puzzle_01",
            title: "FUEL CELLS: MAIN TANK",
            prompt: "Input frequency code matching the visual data on Clue Sheet 1, Problem 1.",
            hash: "MjQ=", // 24
            hint: "Look at the shaded region. 1 out of 2. Which fraction matches?",
            successMsg: "FREQUENCY MATCHED. MAIN TANK ONLINE."
        },
        {
            id: "puzzle_02",
            title: "FUEL CELLS: RESERVE",
            prompt: "Input reserve capacity code from Clue Sheet 1, Problem 2.",
            hash: "NDY=", // 46
            hint: "2 out of 3 parts are shaded. Which option equals 2/3?",
            successMsg: "RESERVE POWER ENGAGED."
        },
        {
            id: "puzzle_03",
            title: "SIGNAL AMPLIFICATION",
            prompt: "Enter the code for the amplified signal (2/5 x 3) from Clue Sheet 2, Problem 3.",
            hash: "NjE1", // 615
            hint: "Multiply top and bottom by 3. Combine the digits.",
            successMsg: "SIGNAL BOOSTED."
        },
        {
            id: "puzzle_04",
            title: "ANTENNA RATIO",
            prompt: "Enter signal strength 'x' for the antenna array (3/4 = x/12).",
            hash: "OQ==", // 9
            hint: "4 times 3 is 12. So 3 times 3 is...?",
            successMsg: "ANTENNA ALIGNED. LINK SECURE."
        },
        {
            id: "puzzle_05",
            title: "OXYGEN SCRUBBERS",
            prompt: "Enter the simplified code for Oxygen Scrubber efficiency (10/20).",
            hash: "MTI=", // 12
            hint: "Cancel the zeros.",
            successMsg: "O2 SCRUBBERS RESTARTING..."
        },
        {
            id: "puzzle_06",
            title: "CARBON VENTING",
            prompt: "Enter the simplified code for Carbon Levels (8/12).",
            hash: "MjM=", // 23
            hint: "Divide 8 and 12 by 4.",
            successMsg: "VENTING SEQUENCE COMPLETE. AIR QUALITY: NORMAL."
        },
        {
            id: "puzzle_07",
            title: "TRAJECTORY CHECK",
            prompt: "Is Point A (1/3) equal to Point B (2/6)? (YES/NO)",
            hash: "WUVT", // YES
            hint: "Simplify 2/6. Does it match?",
            successMsg: "TRAJECTORY CONFIRMED."
        },
        {
            id: "puzzle_08",
            title: "ANOMALY DETECTION",
            prompt: "Which coordinate is NOT a match for 1/4? (A, B, or C)",
            hash: "Qw==", // C
            hint: "Check 4/10. Does it simplify to 1/4?",
            successMsg: "ANOMALY ISOLATED. PATH CLEAR."
        },
        {
            id: "puzzle_09",
            title: "POWER CONSUMPTION",
            prompt: "Did the Captain (4/8) and Pilot (1/2) use the same power? (YES/NO)",
            hash: "WUVT", // YES
            hint: "Simplify 4/8.",
            successMsg: "POWER LOGS VERIFIED."
        },
        {
            id: "puzzle_10",
            title: "WARP CORE STABILITY",
            prompt: "Enter the target integer for core stability (2/10 = x/100).",
            hash: "MjA=", // 20
            hint: "2/10 is 20%. What is 20% of 100?",
            successMsg: "WARP CORE STABLE. JUMP IMMINENT."
        }
    ]
};
