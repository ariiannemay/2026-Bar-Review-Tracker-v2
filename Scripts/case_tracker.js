// --- 1. DATA SOURCE ---
const csvData = `No.,Full Text,Division,Promulgation Date,Type
001,"=HYPERLINK(""https://docs.google.com/document/d/1Yuci6rUA_2FMRADapPgLMqEsEt8tfQtxFbCQE_RsAgk/export?format=pdf"", ""City Government of Pasay v. Arellano University"")",3RD DIVISION,07 May 2025,DECISION
002,"=HYPERLINK(""https://docs.google.com/document/d/1zmE9F8NVKWZ8NlBtTpl5AYPsKpV2B6gHwiUpEtCBfoc/export?format=pdf"", ""Antonino v. Banco De Oro"")",3RD DIVISION,23 Apr 2025,DECISION
003,"=HYPERLINK(""https://docs.google.com/document/d/1LOPMJrd_1ZzekXcmIr4EbE9uFuYrqxelo58WRLKDsOc/export?format=pdf"", ""Mangudadatu v. Comelec"")",EN BANC,22 Apr 2025,DECISION
004,"=HYPERLINK(""https://docs.google.com/document/d/1JW5qlqt6xINLRETnKRR5D5vGSsL3-gpMMNVssLTvrts/export?format=pdf"", ""Hisanza v. Bright Maritime"")",3RD DIVISION,07 Apr 2025,DECISION
005,"=HYPERLINK(""https://docs.google.com/document/d/1Sr75lghndZI5vL6TOGbpOHRZojbDs49PuuBKN_VrrbM/export?format=pdf"", ""People v. Akil"")",3RD DIVISION,07 Apr 2025,DECISION
006,"=HYPERLINK(""https://docs.google.com/document/d/15rT8HCK3_h5rx43tkcEdR5UVN5R8KrY-/export?format=pdf"", ""San Pedro v. Spouses Trinidad"")",3RD DIVISION,07 Apr 2025,DECISION
007,"=HYPERLINK(""https://docs.google.com/document/d/1Xl_Y43P55i2Nn9iv3XKIs7z5Gn66E6kF/export?format=pdf"", ""Rural Bank of San Mateo Isabela v. Ramales"")",3RD DIVISION,02 Apr 2025,DECISION
008,"=HYPERLINK(""https://docs.google.com/document/d/1V3u6B0JvY79yTyR3q_V0d-yXjGk-kZ_F/export?format=pdf"", ""Zamora v. Atty. Mahinay"")",3RD DIVISION,02 Apr 2025,DECISION
009,"=HYPERLINK(""https://docs.google.com/document/d/1T8uE0-Z4Y5oF8x7W_J6pL4vD5m9cQ3q/export?format=pdf"", ""Ocampo v. Batara-Sapad"")",3RD DIVISION,02 Apr 2025,DECISION
010,"=HYPERLINK(""https://docs.google.com/document/d/1R6oG7-H2Z5xL8tW9_K4vM3nQ2pL1rO5/export?format=pdf"", ""Grand Exploit Builder Development v. Hoegaarden Development Realty"")",3RD DIVISION,02 Apr 2025,DECISION
011,"=HYPERLINK(""https://docs.google.com/document/d/1Q4pE5-F0Z3yK6uW7_L2tN1mP0qR4sV6/export?format=pdf"", ""Vera Law v. Atty. Hechanova"")",3RD DIVISION,26 Feb 2025,DECISION
012,"=HYPERLINK(""https://docs.google.com/document/d/1O2nC3-D8X1zI4wU5_J0kM9nQ8oP2rT7/export?format=pdf"", ""Lo v. People"")",3RD DIVISION,26 Feb 2025,DECISION
013,"=HYPERLINK(""https://docs.google.com/document/d/1M0lA1-B6Y9xG2vS3_H8iK7lO6pQ0tU8/export?format=pdf"", ""Spouses Palaganas v. Atty. Panganiban"")",3RD DIVISION,24 Feb 2025,DECISION
014,"=HYPERLINK(""https://docs.google.com/document/d/1K8j9-Z4W7vE0tQ1_F6mO4nL2pR8sT9/export?format=pdf"", ""Bonbon v. People"")",3RD DIVISION,24 Feb 2025,DECISION
015,"=HYPERLINK(""https://docs.google.com/document/d/1I6h7-X2U5tC8rO9_D4kM2nJ0pP6qV7/export?format=pdf"", ""Sillano v. JGC Philippines"")",3RD DIVISION,24 Feb 2025,DECISION
016,"=HYPERLINK(""https://docs.google.com/document/d/1G4f5-V0S3rA6pM7_B2iK0nL8pQ4sT5/export?format=pdf"", ""Aguiling v. People"")",3RD DIVISION,17 Feb 2025,DECISION
017,"=HYPERLINK(""https://docs.google.com/document/d/1E2d3-T8Q1pY4nO5_A0jI8nK6pR2qS3/export?format=pdf"", ""People v. Sandiganbayan, Tumang"")",3RD DIVISION,17 Feb 2025,DECISION
018,"=HYPERLINK(""https://docs.google.com/document/d/1C0b1-R6O9nZ2mL3_y8hG6nI4pP0qQ1/export?format=pdf"", ""Bagbagen v. Perez"")",3RD DIVISION,17 Feb 2025,DECISION
019,"=HYPERLINK(""https://docs.google.com/document/d/1A8Z9-P4M7lX0kK1_w6fE4nJ2pR8qO9/export?format=pdf"", ""Labastida v. Quires"")",3RD DIVISION,27 Jan 2025,DECISION
020,"=HYPERLINK(""https://docs.google.com/document/d/186X7-N2K5jV8iI9_u4dC2nJ0pP6qQ7/export?format=pdf"", ""Baguinon, Sr. v. People"")",3RD DIVISION,27 Jan 2025,DECISION
021,"=HYPERLINK(""https://docs.google.com/document/d/164V5-L0I3hT6gG7_s2bA0nJ8pP4qO5/export?format=pdf"", ""Maitim v. Teknika Skills and Trade Services"")",3RD DIVISION,15 Jan 2025,DECISION
022,"=HYPERLINK(""https://docs.google.com/document/d/142T3-J8G1fR4eE5_q0zY8nJ6pR2qM3/export?format=pdf"", ""Del Monte Land Transport Bus Company v. Jaranilla"")",3RD DIVISION,27 Nov 2024,DECISION
023,"=HYPERLINK(""https://docs.google.com/document/d/120R1-H6E9dP2cC3_o8xW6nJ4pQ0qK1/export?format=pdf"", ""People v. Lupoyon"")",3RD DIVISION,11 Nov 2024,DECISION
024,"=HYPERLINK(""https://docs.google.com/document/d/108P9-F4C7bN0aA1_m6vU4nJ2pQ8qI9/export?format=pdf"", ""Fajardo v. San Miguel Foods"")",3RD DIVISION,11 Nov 2024,DECISION
025,"=HYPERLINK(""https://docs.google.com/document/d/1y6N7-D2A5_M8_I9_k4tS2nJ0pQ6qG7/export?format=pdf"", ""Noveras v. Comelec"")",EN BANC,22 Oct 2024,DECISION
026,"=HYPERLINK(""https://docs.google.com/document/d/1w4L5-B0Y3_K6_G7_i2rQ0nJ8pQ4qE5/export?format=pdf"", ""Puguon, Jr. v. People"")",3RD DIVISION,21 Oct 2024,DECISION
027,"=HYPERLINK(""https://docs.google.com/document/d/1u2J3-Z8W1_I4_E5_g0tO8nJ6pR2qC3/export?format=pdf"", ""Malapit v. Atty. Watin"")",EN BANC,01 Oct 2024,RESOLUTION
028,"=HYPERLINK(""https://docs.google.com/document/d/1s0H1-X6U9_G2_C3_e8rM6nJ4pQ0qA1/export?format=pdf"", ""Pequero v. People"")",3RD DIVISION,07 Aug 2024,DECISION
029,"=HYPERLINK(""https://docs.google.com/document/d/1q8F9-V4S7_E0_A1_c6pK4nJ2pR8qY9/export?format=pdf"", ""People v. Batomalaque"")",3RD DIVISION,07 Aug 2024,DECISION
030,"=HYPERLINK(""https://docs.google.com/document/d/1o6D7-T2Q5_C8_Y9_a4nI2nJ6pR2qW7/export?format=pdf"", ""Davantes v. C.F. Sharp Crew Management"")",3RD DIVISION,07 Aug 2024,DECISION
031,"=HYPERLINK(""https://docs.google.com/document/d/1m4B5-R0O3_A6_W7_Y2lG0nJ4pQ0qU5/export?format=pdf"", ""Legaspi v. Comelec"")",EN BANC,30 Jul 2024,DECISION
032,"=HYPERLINK(""https://docs.google.com/document/d/1k2Z3-P8M1_Y4_U5_W0jE8nJ2pR2qS3/export?format=pdf"", ""Re Atty. Divina"")",EN BANC,30 Jul 2024,DECISION
033,"=HYPERLINK(""https://docs.google.com/document/d/1i0X1-N6K9_W2_S3_U8hC6nJ4pQ0qQ1/export?format=pdf"", ""Gonzales v. Geronimo"")",EN BANC,30 Jul 2024,DECISION
034,"=HYPERLINK(""https://docs.google.com/document/d/1g8V9-L4I7_U0_Q1_S6fA4nJ2pR8qO9/export?format=pdf"", ""Stewart v. Atty. Rioflorido"")",3RD DIVISION,17 Jul 2024,DECISION
035,"=HYPERLINK(""https://docs.google.com/document/d/1e6T7-J2G5_S8_O9_Q4dY2nJ4pQ0M7/export?format=pdf"", ""OCA v. Judge Villavicencio-Olan"")",EN BANC,25 Jun 2024,DECISION
036,"=HYPERLINK(""https://docs.google.com/document/d/1c4R5-H0E3_Q6_M7_O2bW0nJ4pQ0qK5/export?format=pdf"", ""People v. Talaue"")",SPECIAL 1ST DIVISION,19 Jun 2024,RESOLUTION
037,"=HYPERLINK(""https://docs.google.com/document/d/1a2P3-F8C1_O4_K5_M0zU8nJ4pQ0qI3/export?format=pdf"", ""People v. Oh"")",3RD DIVISION,05 Jun 2024,DECISION
038,"=HYPERLINK(""https://docs.google.com/document/d/1Y0N1-D6A9_M2_I3_K8xS6nJ4pQ0qG1/export?format=pdf"", ""Ampolitod v. Top Ever Marine Management Phils."")",3RD DIVISION,22 May 2024,DECISION
039,"=HYPERLINK(""https://docs.google.com/document/d/1W8L9-B4Y7_K0_G1_I6vQ4nJ4pQ0qE9/export?format=pdf"", ""Zoleta v. Ombudsman"")",3RD DIVISION,08 Apr 2024,DECISION
040,"=HYPERLINK(""https://docs.google.com/document/d/1U6J7-Z2W5_I8_E9_G4tO2nJ4pQ0qC7/export?format=pdf"", ""Besmonte v. Napolcom-NCR"")",3RD DIVISION,03 Apr 2024,DECISION
041,"=HYPERLINK(""https://docs.google.com/document/d/1S4H5-X0U3_G6_C7_E2rM0nJ4pQ0qA5/export?format=pdf"", ""Bayron v. COA"")",EN BANC,27 Feb 2024,RESOLUTION
042,"=HYPERLINK(""https://docs.google.com/document/d/1Q2F3-V8S1_E4_A5_C0pS8nJ4pQ0qY3/export?format=pdf"", ""Pacheco v. Reyes"")",3RD DIVISION,26 Feb 2024,DECISION
043,"=HYPERLINK(""https://docs.google.com/document/d/1O0D1-T6Q9_C2_Y3_A8nI6nJ4pQ0qW1/export?format=pdf"", ""Galorio v. People"")",3RD DIVISION,19 Feb 2024,DECISION
044,"=HYPERLINK(""https://docs.google.com/document/d/1M8B9-R4O7_A0_W1_Y6lG4nJ4pQ0qU9/export?format=pdf"", ""Pagtakhan v. People"")",3RD DIVISION,07 Feb 2024,DECISION
045,"=HYPERLINK(""https://docs.google.com/document/d/1K6Z7-P2M5_Y8_U9_W4jE2nJ4pQ0qS7/export?format=pdf"", ""DBP v. COA"")",EN BANC,06 Feb 2024,RESOLUTION
046,"=HYPERLINK(""https://docs.google.com/document/d/1I4X5-N0K3_W6_S7_U2hC0nJ4pQ0qQ5/export?format=pdf"", ""Denusta v. Migrant Workers Manpower Agency"")",3RD DIVISION,31 Jan 2024,DECISION
047,"=HYPERLINK(""https://docs.google.com/document/d/1G2V3-L8I1_U4_Q5_S0fA8nJ4pQ0qO3/export?format=pdf"", ""Villafuerte v. Atty. Tajanlangit"")",3RD DIVISION,06 Dec 2023,DECISION
048,"=HYPERLINK(""https://docs.google.com/document/d/1E0T1-J6G9_S2_O3_Q8dY6nJ4pQ0qM1/export?format=pdf"", ""Trinidad v. Trinidad"")",3RD DIVISION,06 Dec 2023,DECISION
049,"=HYPERLINK(""https://docs.google.com/document/d/1C8R9-H4E7_Q0_M1_O6bW4nJ4pQ0qK9/export?format=pdf"", ""People v. Flores"")",3RD DIVISION,11 Oct 2023,DECISION
050,"=HYPERLINK(""https://docs.google.com/document/d/1A6P7-F2C5_O8_K9_M4zU2nJ4pQ0I7/export?format=pdf"", ""People v. Lala"")",3RD DIVISION,11 Oct 2023,DECISION
051,"=HYPERLINK(""https://docs.google.com/document/d/184N5-D0A3_M6_I7_K2xS0nJ4pQ0qG5/export?format=pdf"", ""People v. Pajarilla"")",3RD DIVISION,30 Aug 2023,DECISION
052,"=HYPERLINK(""https://docs.google.com/document/d/162L3-B8Y1_K4_G5_I0vQ8nJ4pQ0qE3/export?format=pdf"", ""People v. XXX220145"")",3RD DIVISION,30 Aug 2023,DECISION
053,"=HYPERLINK(""https://docs.google.com/document/d/140J1-Z6W9_I2_E3_G8tO6nJ4pQ0qC1/export?format=pdf"", ""Republic v. Spouses Tan"")",3RD DIVISION,23 Aug 2023,DECISION
054,"=HYPERLINK(""https://docs.google.com/document/d/128H9-X4U7_G0_C1_E6rM4nJ4pQ0qA9/export?format=pdf"", ""Bacar v. People"")",3RD DIVISION,23 Aug 2023,DECISION
055,"=HYPERLINK(""https://docs.google.com/document/d/106F7-V2S5_E8_A9_C4pS2nJ4pQ0qY7/export?format=pdf"", ""Palo v. Spouses Baquirquir"")",3RD DIVISION,23 Aug 2023,RESOLUTION
056,"=HYPERLINK(""https://docs.google.com/document/d/1y4D5-T0Q3_C6_Y7_A2nI0nJ4pQ0qW5/export?format=pdf"", ""Aguilar v. People"")",3RD DIVISION,09 Aug 2023,DECISION
057,"=HYPERLINK(""https://docs.google.com/document/d/1w2B3-R8O1_A4_W5_Y0lG8nJ4pQ0qU3/export?format=pdf"", ""Grandspan Development v. Franklin Baker, Inc."")",3RD DIVISION,02 Aug 2023,DECISION
058,"=HYPERLINK(""https://docs.google.com/document/d/1u0Z1-P6M9_Y2_U3_W8jE6nJ4pQ0qS1/export?format=pdf"", ""Cojuangco-Suntay v. Suntay III"")",3RD DIVISION,02 Aug 2023,DECISION
059,"=HYPERLINK(""https://docs.google.com/document/d/1s8X9-N4K7_W0_S1_U6hC4nJ4pQ0qQ9/export?format=pdf"", ""DBP v. COA"")",EN BANC,11 Jul 2023,DECISION
060,"=HYPERLINK(""https://docs.google.com/document/d/1q6V7-L2I5_U8_Q9_S4fA2nJ4pQ0qO7/export?format=pdf"", ""Villanueva v. Comelec"")",EN BANC,11 Jul 2023,DECISION
061,"=HYPERLINK(""https://docs.google.com/document/d/1o4T5-J0G3_S6_O7_Q2dY0nJ4pQ0qM5/export?format=pdf"", ""Arguilles v. Wilhelmsen Smith Bell Manning, Inc."")",3RD DIVISION,10 Jul 2023,DECISION
062,"=HYPERLINK(""https://docs.google.com/document/d/1m2R3-H8E1_Q4_M5_O0bW8nJ4pQ0qK3/export?format=pdf"", ""Tijam v. People"")",3RD DIVISION,10 Jul 2023,DECISION
063,"=HYPERLINK(""https://docs.google.com/document/d/1k0P1-F6C9_O2_K3_M8zU6nJ4pQ0qI1/export?format=pdf"", ""Ocampo v. Macapagal-Arroyo"")",EN BANC,27 Jun 2023,RESOLUTION
064,"=HYPERLINK(""https://docs.google.com/document/d/1i8N9-D4A7_M0_I1_K6xS4nJ4pQ0qG9/export?format=pdf"", ""Mendoza v. Atty. Santiago, Jr."")",3RD DIVISION,14 Jun 2023,DECISION
065,"=HYPERLINK(""https://docs.google.com/document/d/1g6L7-B2Y5_K8_G9_I4vQ2nJ4pQ0qE7/export?format=pdf"", ""Gonzaga v. Garcia, Jr."")",3RD DIVISION,26 Apr 2023,DECISION
066,"=HYPERLINK(""https://docs.google.com/document/d/1e4J5-Z0W3_I6_E7_G2tO0nJ4pQ0qC5/export?format=pdf"", ""Republic v. Espejo"")",3RD DIVISION,26 Apr 2023,DECISION
067,"=HYPERLINK(""https://docs.google.com/document/d/1c2H3-X8U1_G4_C5_E0rM8nJ4pQ0qA3/export?format=pdf"", ""Bunayog v. Foscon Shipmanagement, Inc."")",EN BANC,25 Apr 2023,DECISION
068,"=HYPERLINK(""https://docs.google.com/document/d/1a0F1-V6S9_E2_A3_C8pS6nJ4pQ0qY1/export?format=pdf"", ""Yau v. Judge Veloso"")",3RD DIVISION,19 Apr 2023,DECISION
069,"=HYPERLINK(""https://docs.google.com/document/d/1Y8D9-T4Q7_C0_Y1_A6nI4nJ4pQ0qW9/export?format=pdf"", ""Manuel v. People"")",3RD DIVISION,12 Apr 2023,DECISION
070,"=HYPERLINK(""https://docs.google.com/document/d/1W6B7-R2O5_A8_W9_Y4lG2nJ4pQ0qU7/export?format=pdf"", ""XXX255877 v. People"")",3RD DIVISION,29 Mar 2023,DECISION
071,"=HYPERLINK(""https://docs.google.com/document/d/1U4Z5-P0M3_Y6_U7_W2jE0nJ4pQ0qS5/export?format=pdf"", ""Asignado v. Ombudsman"")",3RD DIVISION,29 Mar 2023,DECISION
072,"=HYPERLINK(""https://docs.google.com/document/d/1S2X3-N8K1_W4_S5_U0hC8nJ4pQ0qQ3/export?format=pdf"", ""Municipality of Sta. Maria, Bulacan v. Buenaventura"")",3RD DIVISION,29 Mar 2023,DECISION
073,"=HYPERLINK(""https://docs.google.com/document/d/1Q0V1-L6I9_U2_Q3_S8fA6nJ4pQ0qO1/export?format=pdf"", ""Citibank Savings, Inc. v. Rogan"")",3RD DIVISION,29 Mar 2023,DECISION
074,"=HYPERLINK(""https://docs.google.com/document/d/1O8T9-J4G7_S0_O1_Q6dY4nJ4pQ0qM9/export?format=pdf"", ""De Guzman v. Spouses Santos"")",3RD DIVISION,29 Mar 2023,DECISION
075,"=HYPERLINK(""https://docs.google.com/document/d/1M6R7-H2E5_Q8_M9_O4bW2nJ4pQ0qK7/export?format=pdf"", ""Solis v. Solis-Laynes"")",3RD DIVISION,29 Mar 2023,DECISION
076,"=HYPERLINK(""https://docs.google.com/document/d/1I8P5-F0C3_O6_K7_M2zU0nJ4pQ0qI5/export?format=pdf"", ""Diversified Plastic Film System, Inc. v. Philippine Investment One (SPV-AMC), Inc."")",3RD DIVISION,29 Mar 2023,DECISION
077,"=HYPERLINK(""https://docs.google.com/document/d/1G6N3-D8A1_M4_I5_K0xS8nJ4pQ0qG3/export?format=pdf"", ""Republic v. Pascual"")",3RD DIVISION,29 Mar 2023,DECISION
078,"=HYPERLINK(""https://docs.google.com/document/d/1E4L1-B6Y9_K2_G3_I8vQ6nJ4pQ0qE1/export?format=pdf"", ""Chevron Philippines v. Looyuko"")",3RD DIVISION,29 Mar 2023,DECISION
079,"=HYPERLINK(""https://docs.google.com/document/d/1C2J9-Z4W7_I0_E1_G6tO4nJ4pQ0qC9/export?format=pdf"", ""Land Bank v. Tayko"")",3RD DIVISION,29 Mar 2023,RESOLUTION
080,"=HYPERLINK(""https://docs.google.com/document/d/1A0H7-X2U5_G8_C9_E4rM2nJ4pQ0qA7/export?format=pdf"", ""Zamora v. Bagatsing, Jr."")",3RD DIVISION,29 Mar 2023,DECISION
081,"=HYPERLINK(""https://docs.google.com/document/d/188F5-V0S3_E6_A7_C2pS0nJ4pQ0qY5/export?format=pdf"", ""Reyes v. Ombudsman"")",3RD DIVISION,15 Mar 2023,DECISION
082,"=HYPERLINK(""https://docs.google.com/document/d/166D3-T8Q1_C4_Y5_A0nI8nJ4pQ0qW3/export?format=pdf"", ""Heirs of Dimao v. NGCP"")",3RD DIVISION,01 Mar 2023,DECISION
083,"=HYPERLINK(""https://docs.google.com/document/d/144B1-R6O9_A2_W3_Y8lG6nJ4pQ0qU1/export?format=pdf"", ""Conche v. People"")",3RD DIVISION,01 Mar 2023,DECISION
084,"=HYPERLINK(""https://docs.google.com/document/d/122Z9-P4M7_Y0_U1_W6jE4nJ4pQ0qS9/export?format=pdf"", ""Singgit v. People"")",3RD DIVISION,27 Feb 2023,DECISION
085,"=HYPERLINK(""https://docs.google.com/document/d/100X7-N2K5_W8_S9_U4hC2nJ4pQ0qQ7/export?format=pdf"", ""Heirs of Manzano v. Kinsonic Philippines, Inc."")",3RD DIVISION,27 Feb 2023,DECISION
086,"=HYPERLINK(""https://docs.google.com/document/d/1y8V5-L0I3_T6gG7_s2bA0nJ8pP4qO5/export?format=pdf"", ""Land Bank v. Miranda"")",3RD DIVISION,22 Feb 2023,DECISION
087,"=HYPERLINK(""https://docs.google.com/document/d/1w6T3-J8G1_R4eE5_q0zY8nJ6pR2qM3/export?format=pdf"", ""Pabalan v. Sabnani"")",EN BANC,21 Feb 2023,DECISION
088,"=HYPERLINK(""https://docs.google.com/document/d/1u4R1-H6E9_P2cC3_o8xW6nJ4pQ0qK1/export?format=pdf"", ""Gotesco Properties v. Cua"")",3RD DIVISION,15 Feb 2023,DECISION
089,"=HYPERLINK(""https://docs.google.com/document/d/1s2P9-F4C7_N0aA1_m6vU4nJ2pQ8qI9/export?format=pdf"", ""Caballes v. CA"")",3RD DIVISION,08 Feb 2023,DECISION
090,"=HYPERLINK(""https://docs.google.com/document/d/1q0N7-D2A5_M8_I9_k4tS2nJ0pQ6qG7/export?format=pdf"", ""Quiambao v. Sumbilla"")",3RD DIVISION,01 Feb 2023,DECISION
091,"=HYPERLINK(""https://docs.google.com/document/d/1o8L5-B0Y3_K6_G7_i2rQ0nJ8pQ0qE5/export?format=pdf"", ""Bariata v. Carpio-Morales"")",3RD DIVISION,01 Feb 2023,DECISION
092,"=HYPERLINK(""https://docs.google.com/document/d/1m6J3-Z8W1_I4_E5_g0tO8nJ6pR2qC3/export?format=pdf"", ""Land Bank v. Spouses Latog"")",3RD DIVISION,01 Feb 2023,DECISION
093,"=HYPERLINK(""https://docs.google.com/document/d/1k4H1-X6U9_G2_C3_e8rM6nJ4pQ0qA1/export?format=pdf"", ""Aquino v. Agua Tierra Oro Mina Development Corporation"")",3RD DIVISION,25 Jan 2023,DECISION
094,"=HYPERLINK(""https://docs.google.com/document/d/1i2F9-V4S7_E0_A1_c6pK4nJ2pR8qY9/export?format=pdf"", ""Provincial Prosecutor of Albay v. Lobiano"")",3RD DIVISION,25 Jan 2023,DECISION
095,"=HYPERLINK(""https://docs.google.com/document/d/1g0D7-T2Q5_C8_Y9_a4nI2nJ6pR2qW7/export?format=pdf"", ""Suyat v. CA"")",EN BANC,24 Jan 2023,DECISION
096,"=HYPERLINK(""https://docs.google.com/document/d/1e8B5-R0O3_A6_W7_Y2lG0nJ4pQ0qU5/export?format=pdf"", ""DENR-PENRO of Virac, Catanduanes v. Eastern Island Shipping Lines"")",3RD DIVISION,16 Jan 2023,DECISION
097,"=HYPERLINK(""https://docs.google.com/document/d/1c6Z3-P8M1_Y4_U5_W0jE8nJ2pR2qS3/export?format=pdf"", ""Vizcarra v. Vizcarra-Nocillado"")",3RD DIVISION,11 Jan 2023,DECISION
098,"=HYPERLINK(""https://docs.google.com/document/d/1a4X1-N6K9_W2_S3_U8hC6nJ4pQ0qQ1/export?format=pdf"", ""Ocampo v. Macapagal-Arroyo"")",EN BANC,10 Jan 2023,DECISION
099,"=HYPERLINK(""https://docs.google.com/document/d/1Y2V9-L4I7_U0_Q1_S6fA4nJ2pR8qO9/export?format=pdf"", ""Bounsit-Torralba v. Torralba"")",3RD DIVISION,07 Dec 2022,DECISION
100,"=HYPERLINK(""https://docs.google.com/document/d/1W0T7-J2G5_S8_O9_Q4dY2nJ4pQ0M7/export?format=pdf"", ""Fort Bonifacio Development Corporation v. Domingo"")",3RD DIVISION,07 Dec 2022,DECISION
101,"=HYPERLINK(""https://docs.google.com/document/d/1U8R5-H0E3_Q6_M7_O2bW0nJ4pQ0qK5/export?format=pdf"", ""Bayron v. COA"")",EN BANC,29 Nov 2022,DECISION
102,"=HYPERLINK(""https://docs.google.com/document/d/1S6P3-F8C1_O4_K5_M0zU8nJ4pQ0qI3/export?format=pdf"", ""Manguerra v. Manguerra-Aberasturi"")",EN BANC,29 Nov 2022,DECISION
103,"=HYPERLINK(""https://docs.google.com/document/d/1Q4N1-D6A9_M2_I3_K8xS6nJ4pQ0qG1/export?format=pdf"", ""Nolasco v. Purence Realty Corporation"")",3RD DIVISION,12 Oct 2022,DECISION
104,"=HYPERLINK(""https://docs.google.com/document/d/1O2L9-B4Y7_K0_G1_I6vQ4nJ4pQ0qE9/export?format=pdf"", ""Cabrales v. Ombudsman"")",3RD DIVISION,12 Oct 2022,DECISION
105,"=HYPERLINK(""https://docs.google.com/document/d/1M0J7-Z2W5_I8_E9_G4tO2nJ4pQ0qC7/export?format=pdf"", ""POrto v. Grant Institute of Trade & Technology, Inc."")",3RD DIVISION,12 Oct 2022,DECISION
106,"=HYPERLINK(""https://docs.google.com/document/d/1K8H5-X0U3_G6_C7_E2rM0nJ4pQ0qA5/export?format=pdf"", ""Rivera v. Velasco"")",3RD DIVISION,05 Oct 2022,DECISION
107,"=HYPERLINK(""https://docs.google.com/document/d/1I6F3-V8S1_E4_A5_C0pS8nJ4pQ0qY3/export?format=pdf"", ""People v. XXX252230"")",3RD DIVISION,05 Oct 2022,DECISION
108,"=HYPERLINK(""https://docs.google.com/document/d/1G4D1-T6Q9_C2_Y3_A8nI6nJ4pQ0qW1/export?format=pdf"", ""Superior General of the Religious of the Virgin Mary (R.V.M.) v. Republic"")",3RD DIVISION,05 Oct 2022,DECISION
109,"=HYPERLINK(""https://docs.google.com/document/d/1E2B9-R4O7_A0_W1_Y6lG4nJ4pQ0qU9/export?format=pdf"", ""Republic v. Robiegie Corporation"")",3RD DIVISION,03 Oct 2022,DECISION
110,"=HYPERLINK(""https://docs.google.com/document/d/1C0Z7-P2M5_Y8_U9_W4jE2nJ4pQ0qS7/export?format=pdf"", ""Galindez v. Salamanca-Guzman"")",3RD DIVISION,28 Sep 2022,DECISION
111,"=HYPERLINK(""https://docs.google.com/document/d/1A8X5-N0K3_W6_S7_U2hC0nJ4pQ0qQ5/export?format=pdf"", ""Galbinez, Jr. v. McGerry's Restaurant"")",3RD DIVISION,28 Sep 2022,DECISION
112,"=HYPERLINK(""https://docs.google.com/document/d/186V3-L8I1_U4_Q5_S0fA8nJ4pQ0qO3/export?format=pdf"", ""Systems Energizer Corporation v. Bellville Development"")",3RD DIVISION,21 Sep 2022,DECISION
113,"=HYPERLINK(""https://docs.google.com/document/d/164T1-J6G9_S2_O3_Q8dY6nJ4pQ0qM1/export?format=pdf"", ""People v. Sernadilla"")",3RD DIVISION,21 Sep 2022,DECISION
114,"=HYPERLINK(""https://docs.google.com/document/d/142R9-H4E7_Q0_M1_O6bW4nJ4pQ0qK9/export?format=pdf"", ""Heirs of Spouses Binay v. Banaag"")",3RD DIVISION,07 Sep 2022,DECISION
115,"=HYPERLINK(""https://docs.google.com/document/d/120P7-F2C5_O8_K9_M4zU2nJ4pQ0qI7/export?format=pdf"", ""PNB v. Tad-y"")",3RD DIVISION,07 Sep 2022,DECISION
116,"=HYPERLINK(""https://docs.google.com/document/d/108N5-D0A3_M6_I7_K2xS0nJ4pQ0qG5/export?format=pdf"", ""Land Bank v. Spouses Cortez"")",3RD DIVISION,07 Sep 2022,DECISION
117,"=HYPERLINK(""https://docs.google.com/document/d/1y6L3-B8Y1_K4_G5_I0vQ8nJ4pQ0qE3/export?format=pdf"", ""Estate of Williams v. Percy"")",3RD DIVISION,31 Aug 2022,DECISION
118,"=HYPERLINK(""https://docs.google.com/document/d/1w4J1-Z6W9_I2_E3_G8tO6nJ4pQ0qC1/export?format=pdf"", ""Estomo v. CSC-X"")",3RD DIVISION,31 Aug 2022,DECISION
119,"=HYPERLINK(""https://docs.google.com/document/d/1u2H9-X4U7_G0_C1_E6rM4nJ4pQ0qA9/export?format=pdf"", ""Alarilla v. Lorenzo"")",3RD DIVISION,31 Aug 2022,DECISION
120,"=HYPERLINK(""https://docs.google.com/document/d/1s0F7-V2S5_E8_A9_C4pS2nJ4pQ0qY7/export?format=pdf"", ""Calisay v. Atty. Esplana"")",3RD DIVISION,23 Aug 2022,DECISION
121,"=HYPERLINK(""https://docs.google.com/document/d/1q8D5-T0Q3_C6_Y7_A2nI0nJ4pQ0qW5/export?format=pdf"", ""Sarion v. People"")",SPECIAL 1ST DIVISION,22 Aug 2022,RESOLUTION
122,"=HYPERLINK(""https://docs.google.com/document/d/1o6B3-R8O1_A4_W5_Y0lG8nJ4pQ0qU3/export?format=pdf"", ""NGCP v. Gaite"")",3RD DIVISION,17 Aug 2022,DECISION
123,"=HYPERLINK(""https://docs.google.com/document/d/1m4Z1-P6M9_Y2_U3_W8jE6nJ4pQ0qS1/export?format=pdf"", ""Cymar International, Inc. v. Farling Industrial"")",3RD DIVISION,17 Aug 2022,DECISION
124,"=HYPERLINK(""https://docs.google.com/document/d/1k2X9-N4K7_W0_S1_U6hC4nJ4pQ0qQ9/export?format=pdf"", ""Southstar Construction and Development v. Philippine Estates Corporation"")",3RD DIVISION,01 Aug 2022,DECISION
125,"=HYPERLINK(""https://docs.google.com/document/d/1i0V7-L2I5_U8_Q9_S4fA2nJ4pQ0qO7/export?format=pdf"", ""Spouses Vargas v. Sta. Lucia Realty and Development"")",3RD DIVISION,27 Jul 2022,DECISION
126,"=HYPERLINK(""https://docs.google.com/document/d/1g8T5-J0G3_S6_O7_Q2dY0nJ4pQ0qM5/export?format=pdf"", ""Hamid v. Gervasio Security and Investigation Agency"")",3RD DIVISION,27 Jul 2022,DECISION
127,"=HYPERLINK(""https://docs.google.com/document/d/1e6R3-H8E1_Q4_M5_O0bW8nJ4pQ0qK3/export?format=pdf"", ""Malones v. People"")",3RD DIVISION,20 Jul 2022,DECISION
128,"=HYPERLINK(""https://docs.google.com/document/d/1c4P1-F6C9_O2_K3_M8zU6nJ4pQ0qI1/export?format=pdf"", ""Amad v. Comelec"")",EN BANC,05 Jul 2022,DECISION
129,"=HYPERLINK(""https://docs.google.com/document/d/1a2N9-D4A7_M0_I1_K6xS4nJ4pQ0qG9/export?format=pdf"", ""People v. Pimentel"")",3RD DIVISION,15 Jun 2022,DECISION
130,"=HYPERLINK(""https://docs.google.com/document/d/1Y0L7-B2Y5_K8_G9_I4vQ2nJ4pQ0qE7/export?format=pdf"", ""People v. BBB252214"")",EN BANC,14 Jun 2022,DECISION
131,"=HYPERLINK(""https://docs.google.com/document/d/1W8J5-Z0W3_I6_E7_G2tO0nJ4pQ0qC5/export?format=pdf"", ""Republic v. Buenaventura"")",1ST DIVISION,05 Apr 2022,DECISION
132,"=HYPERLINK(""https://docs.google.com/document/d/1U6H3-X8U1_G4_C5_E0rM8nJ4pQ0qA3/export?format=pdf"", ""Mangayan v. Atty. Robielos III"")",EN BANC,05 Apr 2022,DECISION
133,"=HYPERLINK(""https://docs.google.com/document/d/1S4F1-V6S9_E2_A3_C8pS6nJ4pQ0qY1/export?format=pdf"", ""Bollozos v. Heirs of Vda. de Aguilar"")",1ST DIVISION,29 Mar 2022,DECISION
134,"=HYPERLINK(""https://docs.google.com/document/d/1Q2D9-T4Q7_C0_Y1_A6nI4nJ4pQ0qW9/export?format=pdf"", ""ABS-CBN v. Magno"")",1ST DIVISION,29 Mar 2022,DECISION
135,"=HYPERLINK(""https://docs.google.com/document/d/1O0B7-R2O5_A8_W9_Y4lG2nJ4pQ0qU7/export?format=pdf"", ""Cheng v. People"")",1ST DIVISION,23 Mar 2022,DECISION
136,"=HYPERLINK(""https://docs.google.com/document/d/1M8Z5-P0M3_Y6_U7_W2jE0nJ4pQ0qS5/export?format=pdf"", ""Rural Bank of Candelaria (Zambales) v. Banluta"")",1ST DIVISION,23 Mar 2022,DECISION
137,"=HYPERLINK(""https://docs.google.com/document/d/1K6X3-N8K1_W4_S5_U0hC8nJ4pQ0qQ3/export?format=pdf"", ""Ombudsman v. Rodas"")",1ST DIVISION,23 Mar 2022,DECISION
138,"=HYPERLINK(""https://docs.google.com/document/d/1I4V1-L6I9_U2_Q3_S8fA6nJ4pQ0qO1/export?format=pdf"", ""People v. Cerezo"")",1ST DIVISION,15 Mar 2022,DECISION
139,"=HYPERLINK(""https://docs.google.com/document/d/1G2T9-J4G7_S0_O1_Q6dY4nJ4pQ0qM9/export?format=pdf"", ""Metrobank v. Salazar Realty Corporation"")",1ST DIVISION,09 Mar 2022,DECISION
140,"=HYPERLINK(""https://docs.google.com/document/d/1E0R7-H2E5_Q8_M9_O4bW2nJ4pQ0qK7/export?format=pdf"", ""People v. Ramoy"")",1ST DIVISION,09 Mar 2022,DECISION
141,"=HYPERLINK(""https://docs.google.com/document/d/1C8P5-F0C3_O6_K7_M2zU0nJ4pQ0qI5/export?format=pdf"", ""Valderas v. Sulse"")",1ST DIVISION,09 Mar 2022,DECISION
142,"=HYPERLINK(""https://docs.google.com/document/d/1A6N3-D8A1_M4_I5_K0xS8nJ4pQ0qG3/export?format=pdf"", ""De Leon v. Asombrado-Llacuna"")",1ST DIVISION,02 Mar 2022,DECISION
143,"=HYPERLINK(""https://docs.google.com/document/d/184L1-B6Y9_K2_G3_I8vQ6nJ4pQ0qE1/export?format=pdf"", ""Ombudsman v. Hermosura"")",2ND DIVISION,16 Feb 2022,DECISION
144,"=HYPERLINK(""https://docs.google.com/document/d/162J9-Z4W7_I0_E1_G6tO4nJ4pQ0qC9/export?format=pdf"", ""People v. XXX254254"")",2ND DIVISION,16 Feb 2022,DECISION
145,"=HYPERLINK(""https://docs.google.com/document/d/140H7-X2U5_G8_C9_E4rM2nJ4pQ0qA7/export?format=pdf"", ""Malate Construction Development v. Extraordinary Realty Agents & Brokers Cooperative"")",2ND DIVISION,05 Jan 2022,DECISION
146,"=HYPERLINK(""https://docs.google.com/document/d/128F5-V0S3_E6_A7_C2pS0nJ4pQ0qY5/export?format=pdf"", ""Saint Wealth Ltd. v. BIR"")",EN BANC,07 Dec 2021,DECISION
147,"=HYPERLINK(""https://docs.google.com/document/d/106D3-T8Q1_C4_Y5_A0nI8nJ4pQ0qW3/export?format=pdf"", ""Limcoma Labor Organization (LLO)-PLAC v. Limcoma Multi-purpose Coop. (Limcoma)"")",2ND DIVISION,29 Nov 2021,DECISION
148,"=HYPERLINK(""https://docs.google.com/document/d/1y4B1-R6O9_A2_W3_Y8lG6nJ4pQ0qU1/export?format=pdf"", ""Acosta v. People"")",2ND DIVISION,24 Nov 2021,DECISION
149,"=HYPERLINK(""https://docs.google.com/document/d/1w2Z9-P4M7_Y0_U1_W6jE4nJ4pQ0qS9/export?format=pdf"", ""Corpuz v. COA"")",EN BANC,23 Nov 2021,DECISION
150,"=HYPERLINK(""https://docs.google.com/document/d/1u0X7-N2K5_W8_S9_U4hC2nJ4pQ0qQ7/export?format=pdf"", ""People v. Montilla"")",2ND DIVISION,22 Nov 2021,DECISION
151,"=HYPERLINK(""https://docs.google.com/document/d/1s8V5-L0I3_T6gG7_s2bA0nJ8pP4qO5/export?format=pdf"", ""BW Shipping Philippines v. Ong"")",2ND DIVISION,17 Nov 2021,DECISION
152,"=HYPERLINK(""https://docs.google.com/document/d/1q6T3-J8G1_R4eE5_q0zY8nJ6pR2qM3/export?format=pdf"", ""Spouses Domasian v. Demdam"")",2ND DIVISION,17 Nov 2021,DECISION
153,"=HYPERLINK(""https://docs.google.com/document/d/1o4R1-H6E9_P2cC3_o8xW6nJ4pQ0qK1/export?format=pdf"", ""Bawasanta v. People"")",2ND DIVISION,17 Nov 2021,DECISION
154,"=HYPERLINK(""https://docs.google.com/document/d/1m2P9-F4C7_N0aA1_m6vU4nJ2pQ8qI9/export?format=pdf"", ""Coca-Cola FEMSA Philippines, Inc. v. Coca-Cola FEMSA Phils."")",2ND DIVISION,17 Nov 2021,DECISION
155,"=HYPERLINK(""https://docs.google.com/document/d/1k0N7-D2A5_M8_I9_k4tS2nJ0pQ6qG7/export?format=pdf"", ""Poeple v. Palabrica III"")",2ND DIVISION,17 Nov 2021,DECISION
156,"=HYPERLINK(""https://docs.google.com/document/d/1i8L5-B0Y3_K6_G7_i2rQ0nJ8pQ0qE5/export?format=pdf"", ""Bernardo v. Dimaya"")",2ND DIVISION,10 Nov 2021,DECISION
157,"=HYPERLINK(""https://docs.google.com/document/d/1g6J3-Z8W1_I4_E5_g0tO8nJ6pR2qC3/export?format=pdf"", ""McConell Dowell Phil., Inc. v. Bernal"")",2ND DIVISION,10 Nov 2021,DECISION
158,"=HYPERLINK(""https://docs.google.com/document/d/1e4H1-X6U9_G2_C3_e8rM6nJ4pQ0qA1/export?format=pdf"", ""SBMA v. Subic Bay Marine Exploratorium"")",2ND DIVISION,10 Nov 2021,DECISION
159,"=HYPERLINK(""https://docs.google.com/document/d/1c2F9-V4S7_E0_A1_c6pK4nJ2pR8qY9/export?format=pdf"", ""Padojinog v. Ombudsman"")",2ND DIVISION,13 Oct 2021,DECISION
160,"=HYPERLINK(""https://docs.google.com/document/d/1a0D7-T2Q5_C8_Y9_a4nI2nJ6pR2qW7/export?format=pdf"", ""People v. Amara"")",2ND DIVISION,13 Oct 2021,DECISION
161,"=HYPERLINK(""https://docs.google.com/document/d/1Y8B5-R0O3_A6_W7_Y2lG0nJ4pQ0qU5/export?format=pdf"", ""Gutierrez v. People"")",2ND DIVISION,13 Oct 2021,DECISION
162,"=HYPERLINK(""https://docs.google.com/document/d/1W6Z3-P8M1_Y4_U5_W0jE8nJ2pR2qS3/export?format=pdf"", ""Atty. Kayaban, Jr. v. Atty. Palicte, III"")",EN BANC,05 Oct 2021,DECISION
163,"=HYPERLINK(""https://docs.google.com/document/d/1U4X1-N6K9_W2_S3_U8hC6nJ4pQ0qQ1/export?format=pdf"", ""Lucero v. Delfino"")",2ND DIVISION,29 Sep 2021,DECISION
164,"=HYPERLINK(""https://docs.google.com/document/d/1S2V9-L4I7_U0_Q1_S6fA4nJ2pR8qO9/export?format=pdf"", ""People v. Peralta"")",2ND DIVISION,29 Sep 2021,DECISION
165,"=HYPERLINK(""https://docs.google.com/document/d/1Q0T7-J2G5_S8_O9_Q4dY2nJ4pQ0qM7/export?format=pdf"", ""Berces v. CSC"")",2ND DIVISION,29 Sep 2021,DECISION
166,"=HYPERLINK(""https://docs.google.com/document/d/1O8R5-H0E3_Q6_M7_O2bW0nJ4pQ0qK5/export?format=pdf"", ""The Salvation Army v. SSS"")",2ND DIVISION,15 Sep 2021,DECISION
167,"=HYPERLINK(""https://docs.google.com/document/d/1M6P3-F8C1_O4_K5_M0zU8nJ4pQ0qI3/export?format=pdf"", ""Lagao v. People"")",2ND DIVISION,15 Sep 2021,DECISION
168,"=HYPERLINK(""https://docs.google.com/document/d/1I8N1-D6A9_M2_I3_K8xS6nJ4pQ0qG1/export?format=pdf"", ""Joven v. Spouses Tulio"")",2ND DIVISION,04 Aug 2021,DECISION
169,"=HYPERLINK(""https://docs.google.com/document/d/1G6L9-B4Y7_K0_G1_I6vQ4nJ2pR8qE9/export?format=pdf"", ""Quitalig v. Quitalig"")",2ND DIVISION,04 Aug 2021,DECISION
170,"=HYPERLINK(""https://docs.google.com/document/d/1E4J7-Z2W5_I8_E9_G4tO2nJ4pQ0qC7/export?format=pdf"", ""CF Sharp Crew Management v. Cunanan"")",2ND DIVISION,04 Aug 2021,DECISION
171,"=HYPERLINK(""https://docs.google.com/document/d/1C2H5-X0U3_G6_C7_E2rM0nJ4pQ0qA5/export?format=pdf"", ""Anacay v. Atty. Alberto"")",2ND DIVISION,04 Aug 2021,DECISION
172,"=HYPERLINK(""https://docs.google.com/document/d/1A0F3-V8S1_E4_A5_C0pS8nJ4pQ0qY3/export?format=pdf"", ""Moreno v. Chateau Royale Sports and Country Club"")",2ND DIVISION,04 Aug 2021,DECISION
173,"=HYPERLINK(""https://docs.google.com/document/d/188D1-T6Q9_C2_Y3_A8nI6nJ4pQ0qW1/export?format=pdf"", ""Ebancuel v. Acierto"")",2ND DIVISION,28 Jul 2021,DECISION
174,"=HYPERLINK(""https://docs.google.com/document/d/166B9-R4O7_A0_W1_Y6lG4nJ4pQ0qU9/export?format=pdf"", ""Secretary of DAR v. Mendoza"")",1ST DIVISION,14 Jul 2021,DECISION
175,"=HYPERLINK(""https://docs.google.com/document/d/144Z7-P2M5_Y8_U9_W4jE2nJ4pQ0qS7/export?format=pdf"", ""People v. San Pedro"")",1ST DIVISION,14 Jul 2021,DECISION
176,"=HYPERLINK(""https://docs.google.com/document/d/122X5-N0K3_W6_S7_U2hC0nJ4pQ0qQ5/export?format=pdf"", ""Waterfront Philippines v. SSS"")",1ST DIVISION,06 Jul 2021,DECISION
177,"=HYPERLINK(""https://docs.google.com/document/d/100V3-L8I1_U4_Q5_S0fA8nJ4pQ0qO3/export?format=pdf"", ""People v. XXX218087"")",1ST DIVISION,06 Jul 2021,DECISION
178,"=HYPERLINK(""https://docs.google.com/document/d/1y8T1-J6G9_S2_O3_Q8dY6nJ4pQ0qM1/export?format=pdf"", ""BSM Crew Service Centre Phils., Inc. v. Llanita"")",1ST DIVISION,06 Jul 2021,DECISION
179,"=HYPERLINK(""https://docs.google.com/document/d/1w6R9-H4E7_Q0_M1_O6bW4nJ4pQ0qK9/export?format=pdf"", ""Crown Shipping Services v. Cervas"")",1ST DIVISION,06 Jul 2021,DECISION
180,"=HYPERLINK(""https://docs.google.com/document/d/1u4P7-F2C5_O8_K9_M4zU2nJ4pQ0qI7/export?format=pdf"", ""Imperial v. People"")",1ST DIVISION,30 Jun 2021,DECISION
181,"=HYPERLINK(""https://docs.google.com/document/d/1s2N5-D0A3_M6_I7_K2xS0nJ4pQ0qG5/export?format=pdf"", ""PLDT v. Domingo"")",1ST DIVISION,30 Jun 2021,DECISION
182,"=HYPERLINK(""https://docs.google.com/document/d/1q0L3-B8Y1_K4_G5_I0vQ8nJ4pQ0qE3/export?format=pdf"", ""Ambrose v. Suque-Ambrose"")",1ST DIVISION,23 Jun 2021,DECISION
183,"=HYPERLINK(""https://docs.google.com/document/d/1o8J1-Z6W9_I2_E3_G8tO6nJ4pQ0qC1/export?format=pdf"", ""Atienza v. TKC Heavy Industries Corporation"")",1ST DIVISION,23 Jun 2021,DECISION
184,"=HYPERLINK(""https://docs.google.com/document/d/1m6H9-X4U7_G0_C1_E6rM4nJ4pQ0qA9/export?format=pdf"", ""Almazan v. Bacolod"")",1ST DIVISION,16 Jun 2021,DECISION
185,"=HYPERLINK(""https://docs.google.com/document/d/1k4F7-V2S5_E8_A9_C4pS2nJ4pQ0qY7/export?format=pdf"", ""BSP v. Ombudsman"")",1ST DIVISION,16 Jun 2021,DECISION
186,"=HYPERLINK(""https://docs.google.com/document/d/1i2D5-T0Q3_C6_Y7_A2nI0nJ4pQ0qW5/export?format=pdf"", ""Authority of the Freeport Area of Bataan v. F.F. Cruz & Co., Inc."")",1ST DIVISION,14 May 2021,DECISION
187,"=HYPERLINK(""https://docs.google.com/document/d/1g0B3-R8O1_A4_W5_Y0lG8nJ4pQ0qU3/export?format=pdf"", ""Paga v. Judge Paderanga"")",1ST DIVISION,05 May 2021,RESOLUTION
188,"=HYPERLINK(""https://docs.google.com/document/d/1e8Z1-P6M9_Y2_U3_W8jE6nJ4pQ0qS1/export?format=pdf"", ""De Joya v. Madlangbayan"")",1ST DIVISION,28 Apr 2021,DECISION
189,"=HYPERLINK(""https://docs.google.com/document/d/1c6X9-N4K7_W0_S1_U6hC4nJ4pQ0qQ9/export?format=pdf"", ""Figueroa v. COA"")",EN BANC,27 Apr 2021,DECISION
190,"=HYPERLINK(""https://docs.google.com/document/d/1a4V7-L2I5_U8_Q9_S4fA2nJ4pQ0qO7/export?format=pdf"", ""Cagayan de Oro Water District v. COA"")",EN BANC,27 Apr 2021,DECISION
191,"=HYPERLINK(""https://docs.google.com/document/d/1Y2T5-J0G3_S6_O7_Q2dY0nJ4pQ0qM5/export?format=pdf"", ""People v. Toledo"")",1ST DIVISION,24 Mar 2021,DECISION
192,"=HYPERLINK(""https://docs.google.com/document/d/1W0R3-H8E1_Q4_M5_O0bW8nJ4pQ0qK3/export?format=pdf"", ""Feliciano v. People"")",1ST DIVISION,18 Mar 2021,DECISION
193,"=HYPERLINK(""https://docs.google.com/document/d/1U8P1-F6C9_O2_K3_M8zU6nJ4pQ0qI1/export?format=pdf"", ""Philippine Transmarine Carriers v. Manzano"")",1ST DIVISION,18 Mar 2021,DECISION
194,"=HYPERLINK(""https://docs.google.com/document/d/1S6N9-D4A7_M0_I1_K6xS4nJ4pQ0qG9/export?format=pdf"", ""Sarion v. People"")",1ST DIVISION,18 Mar 2021,DECISION
195,"=HYPERLINK(""https://docs.google.com/document/d/1Q4L7-B2Y5_K8_G9_I4vQ2nJ4pQ0qE7/export?format=pdf"", ""Toston v. People"")",1ST DIVISION,03 Mar 2021,DECISION
196,"=HYPERLINK(""https://docs.google.com/document/d/1O2J5-Z0W3_I6_E7_G2tO0nJ4pQ0qC5/export?format=pdf"", ""People v. Coritana"")",1ST DIVISION,03 Mar 2021,DECISION
197,"=HYPERLINK(""https://docs.google.com/document/d/1M0H3-X8U1_G4_C5_E0rM8nJ4pQ0qA3/export?format=pdf"", ""Quisumbing v. Ochoa"")",1ST DIVISION,03 Mar 2021,DECISION
198,"=HYPERLINK(""https://docs.google.com/document/d/1K8F1-V6S9_E2_A3_C8pS6nJ4pQ0qY1/export?format=pdf"", ""Toyo Seat Philippines v. Velasco"")",1ST DIVISION,03 Mar 2021,DECISION
199,"=HYPERLINK(""https://docs.google.com/document/d/1I6D9-T4Q7_C0_Y1_A6nI4nJ4pQ0qW9/export?format=pdf"", ""Emzee Foods, Inc. v. Elarfoods, Inc."")",1ST DIVISION,17 Feb 2021,DECISION
200,"=HYPERLINK(""https://docs.google.com/document/d/1G4B7-R2O5_A8_W9_Y4lG2nJ4pQ0qU7/export?format=pdf"", ""PNB v. Oaminal"")",1ST DIVISION,17 Feb 2021,DECISION
201,"=HYPERLINK(""https://docs.google.com/document/d/1E2Z5-P0M3_Y6_U7_W2jE0nJ4pQ0qS5/export?format=pdf"", ""Republic v. Asuncion"")",1ST DIVISION,17 Feb 2021,DECISION
202,"=HYPERLINK(""https://docs.google.com/document/d/1C0X3-N8K1_W4_S5_U0hC8nJ4pQ0qQ3/export?format=pdf"", ""Quijano v. People"")",1ST DIVISION,10 Feb 2021,DECISION
203,"=HYPERLINK(""https://docs.google.com/document/d/1A8V1-L6I9_U2_Q3_S8fA6nJ4pQ0qO1/export?format=pdf"", ""Banta v. Equitable Bank, Inc."")",1ST DIVISION,10 Feb 2021,DECISION
204,"=HYPERLINK(""https://docs.google.com/document/d/186T9-J4G7_S0_O1_Q6dY4nJ4pQ0qM9/export?format=pdf"", ""Torm Shipping Philippines, Inc. v. Alacre"")",1ST DIVISION,26 Jan 2021,DECISION
205,"=HYPERLINK(""https://docs.google.com/document/d/164R7-H2E5_Q8_M9_O4bW2nJ4pQ0qK7/export?format=pdf"", ""Yambao v. Republic"")",1ST DIVISION,26 Jan 2021,DECISION
206,"=HYPERLINK(""https://docs.google.com/document/d/142P5-F0C3_O6_K7_M2zU0nJ4pQ0qI5/export?format=pdf"", ""Bernasconi v. Atty. Demaisip"")",EN BANC,19 Jan 2021,DECISION
207,"=HYPERLINK(""https://docs.google.com/document/d/120N3-D8A1_M4_I5_K0xS8nJ4pQ0qG3/export?format=pdf"", ""Metrobank v. Cruz"")",1ST DIVISION,19 Jan 2021,DECISION
208,"=HYPERLINK(""https://docs.google.com/document/d/108L1-B6Y9_K2_G3_I8vQ6nJ4pQ0qE1/export?format=pdf"", ""Balina v. People"")",1ST DIVISION,12 Jan 2021,DECISION
209,"=HYPERLINK(""https://docs.google.com/document/d/1y6J9-Z4W7_I0_E1_G6tO4nJ4pQ0qC9/export?format=pdf"", ""Philippine Phosphate Fertilizer Corporation v. Mayol"")",1ST DIVISION,09 Dec 2020,DECISION
210,"=HYPERLINK(""https://docs.google.com/document/d/1w4H7-X2U5_G8_C9_E4rM2nJ4pQ0qA7/export?format=pdf"", ""International Container Terminal Services, Inc. v. Ang"")",1ST DIVISION,09 Dec 2020,DECISION
211,"=HYPERLINK(""https://docs.google.com/document/d/1u2F5-V0S3_E6_A7_C2pS0nJ4pQ0qY5/export?format=pdf"", ""Municipality of Isabel, Leyte v. Municipality of Merida, Leyte"")",1ST DIVISION,09 Dec 2020,DECISION
212,"=HYPERLINK(""https://docs.google.com/document/d/1s0D3-T8Q1_C4_Y5_A0nI8nJ4pQ0qW3/export?format=pdf"", ""Menzon v. COA"")",EN BANC,09 Dec 2020,DECISION
213,"=HYPERLINK(""https://docs.google.com/document/d/1q8B1-R6O9_A2_W3_Y8lG6nJ4pQ0qU1/export?format=pdf"", ""OCA v. Judge Atienza-Turla"")",EN BANC,09 Dec 2020,DECISION
214,"=HYPERLINK(""https://docs.google.com/document/d/1o6Z9-P4M7_Y0_U1_W6jE4nJ4pQ0qS9/export?format=pdf"", ""Paez v. Marinduque Electric Cooperative, Inc."")",1ST DIVISION,09 Dec 2020,DECISION
215,"=HYPERLINK(""https://docs.google.com/document/d/1m4X7-N2K5_W8_S9_U4hC2nJ4pQ0qQ7/export?format=pdf"", ""Crisologo v. Hao"")",1ST DIVISION,02 Dec 2020,DECISION
216,"=HYPERLINK(""https://docs.google.com/document/d/1k2V5-L0I3_T6gG7_s2bA0nJ8pP4qO5/export?format=pdf"", ""People v. Barrera"")",EN BANC,01 Dec 2020,DECISION
217,"=HYPERLINK(""https://docs.google.com/document/d/1i0T3-J8G1_R4eE5_q0zY8nJ4pQ0qM3/export?format=pdf"", ""OSG Shipmanagement Manila, Inc. v. De Jesus"")",1ST DIVISION,18 Nov 2020,DECISION
218,"=HYPERLINK(""https://docs.google.com/document/d/1g8R1-H6E9_P2cC3_o8xW6nJ4pQ0qK1/export?format=pdf"", ""POEA v. COA"")",EN BANC,17 Nov 2020,DECISION
219,"=HYPERLINK(""https://docs.google.com/document/d/1e6P9-F4C7_N0aA1_m6vU4nJ2pQ8qI9/export?format=pdf"", ""Ombudsman v. Rondon"")",1ST DIVISION,10 Nov 2020,DECISION
220,"=HYPERLINK(""https://docs.google.com/document/d/1c4N7-D2A5_M8_I9_k4tS2nJ0pQ6qG7/export?format=pdf"", ""Torreta v. COA"")",EN BANC,10 Nov 2020,DECISION
221,"=HYPERLINK(""https://docs.google.com/document/d/1a2L5-B0Y3_K6_G7_i2rQ0nJ8pQ0qE5/export?format=pdf"", ""AFP v. Amogod"")",IST DIVISION,10 Nov 2020,DECISION
222,"=HYPERLINK(""https://docs.google.com/document/d/1Y0J3-Z8W1_I4_E5_g0tO8nJ6pR2qC3/export?format=pdf"", ""UEM Mara Philippines v. Wee"")",3RD DIVISION,14 Oct 2020,DECISION
223,"=HYPERLINK(""https://docs.google.com/document/d/1W8H1-X6U9_G2_C3_e8rM6nJ4pQ0qA1/export?format=pdf"", ""Philconstruct Resources, Inc. v. Aquino"")",3RD DIVISION,07 Oct 2020,DECISION
224,"=HYPERLINK(""https://docs.google.com/document/d/1U6F9-V4S7_E0_A1_c6pK4nJ2pR8qY9/export?format=pdf"", ""People v. Loma"")",3RD DIVISION,05 Oct 2020,DECISION
225,"=HYPERLINK(""https://docs.google.com/document/d/1S4D7-T2Q5_C8_Y9_a4nI2nJ6pR2qW7/export?format=pdf"", ""Salas v. Bunyi-Medina"")",3RD DIVISION,28 Sep 2020,DECISION
226,"=HYPERLINK(""https://docs.google.com/document/d/1Q2B5-R0O3_A6_W7_Y2lG0nJ4pQ0qU5/export?format=pdf"", ""Land Bank v. Hilado"")",3RD DIVISION,23 Sep 2020,DECISION
227,"=HYPERLINK(""https://docs.google.com/document/d/1O0Z3-P8M1_Y4_U5_W0jE8nJ2pR2qS3/export?format=pdf"", ""Land Bank v. Esteban"")",3RD DIVISION,23 Sep 2020,DECISION
228,"=HYPERLINK(""https://docs.google.com/document/d/1M8X1-N6K9_W2_S3_U8hC6nJ4pQ0qQ1/export?format=pdf"", ""De Castro v. COA"")",EN BANC,22 Sep 2020,DECISION
229,"=HYPERLINK(""https://docs.google.com/document/d/1K6V9-L4I7_U0_Q1_S6fA4nJ2pR8qO9/export?format=pdf"", ""People v. Archivido"")",3RD DIVISION,21 Sep 2020,DECISION
230,"=HYPERLINK(""https://docs.google.com/document/d/1I4T7-J2G5_S8_O9_Q4dY2nJ4pQ0qM7/export?format=pdf"", ""Balbarino v. Pacific Ocean Manning, Inc."")",3RD DIVISION,21 Sep 2020,DECISION
231,"=HYPERLINK(""https://docs.google.com/document/d/1G2R5-H0E3_Q6_M7_O2bW0nJ4pQ0qK5/export?format=pdf"", ""Ingram v. Atty. Lorica IV"")",3RD DIVISION,16 Sep 2020,DECISION
232,"=HYPERLINK(""https://docs.google.com/document/d/1E0P3-F8C1_O4_K5_M0zU8nJ4pQ0qI3/export?format=pdf"", ""Judge Ramos v. Atty. Lazo"")",3RD DIVISION,14 Sep 2020,DECISION
233,"=HYPERLINK(""https://docs.google.com/document/d/1C8N1-D6A9_M2_I3_K8xS6nJ4pQ0qG1/export?format=pdf"", ""Santos v. V.C. Development Corporation"")",3RD DIVISION,09 Sep 2020,DECISION
234,"=HYPERLINK(""https://docs.google.com/document/d/1A6L9-B4Y7_K0_G1_I6vQ4nJ2pR8qO9/export?format=pdf"", ""Sismaet v. Atty. Cruzabra"")",3RD DIVISION,07 Sep 2020,DECISION
235,"=HYPERLINK(""https://docs.google.com/document/d/184J7-Z2W5_I8_E9_G4tO2nJ4pQ0qC7/export?format=pdf"", ""IP E-Game Ventures, Inc. v. Beijing Perfect World Software Co., Ltd."")",3RD DIVISION,07 Sep 2020,DECISION
236,"=HYPERLINK(""https://docs.google.com/document/d/162H5-X0U3_G6_C7_E2rM0nJ4pQ0qA5/export?format=pdf"", ""Unirock Corporation v. CA"")",3RD DIVISION,07 Sep 2020,DECISION
237,"=HYPERLINK(""https://docs.google.com/document/d/140F3-V8S1_E4_A5_C0pS8nJ4pQ0qY3/export?format=pdf"", ""DBP v. Ronquillo"")",3RD DIVISION,07 Sep 2020,DECISION
238,"=HYPERLINK(""https://docs.google.com/document/d/128D1-T6Q9_C2_Y3_A8nI6nJ4pQ0qW1/export?format=pdf"", ""Sierra Grande Realty Corporation v. Ragasa"")",3RD DIVISION,02 Sep 2020,DECISION
239,"=HYPERLINK(""https://docs.google.com/document/d/106B9-R4O7_A0_W1_Y6lG4nJ4pQ0qU9/export?format=pdf"", ""Reyes v. Elquiero"")",3RD DIVISION,02 Sep 2020,DECISION
240,"=HYPERLINK(""https://docs.google.com/document/d/1y4Z7-P2M5_Y8_U9_W4jE2nJ4pQ0qS7/export?format=pdf"", ""Bahia Shipping Services, Inc. v. Castillo"")",3RD DIVISION,02 Sep 2020,DECISION
241,"=HYPERLINK(""https://docs.google.com/document/d/1w2X5-N0K3_W6_S7_U2hC0nJ4pQ0qQ5/export?format=pdf"", ""Realiza v. People"")",3RD DIVISION,26 Aug 2020,DECISION
242,"=HYPERLINK(""https://docs.google.com/document/d/1u0V3-L8I1_U4_Q5_S0fA8nJ4pQ0qO3/export?format=pdf"", ""People v. Lopez"")",3RD DIVISION,15 Jul 2020,DECISION
243,"=HYPERLINK(""https://docs.google.com/document/d/1s8T1-J6G9_S2_O3_Q8dY6nJ4pQ0qM1/export?format=pdf"", ""Dayandayan v. Spouses Rojas"")",3RD DIVISION,15 Jul 2020,DECISION
244,"=HYPERLINK(""https://docs.google.com/document/d/1q6R9-H4E7_Q0_M1_O6bW4nJ4pQ0qK9/export?format=pdf"", ""People v. Tamano"")",3RD DIVISION,08 Jul 2020,DECISION
245,"=HYPERLINK(""https://docs.google.com/document/d/1o4P7-F2C5_O8_K9_M4zU2nJ4pQ0qI7/export?format=pdf"", ""Basagan v. Atty. Espina"")",3RD DIVISION,08 Jul 2020,DECISION
246,"=HYPERLINK(""https://docs.google.com/document/d/1m2N5-D0A3_M6_I7_K2xS0nJ4pQ0qG5/export?format=pdf"", ""Heirs of Torrices v. Atty. Galano"")",EN BANC,07 Jul 2020,RESOLUTION
247,"=HYPERLINK(""https://docs.google.com/document/d/1k0L3-B8Y1_K4_G5_I0vQ8nJ4pQ0qE3/export?format=pdf"", ""Dela Cruz v. Parumog"")",3RD DIVISION,17 Jun 2020,DECISION
248,"=HYPERLINK(""https://docs.google.com/document/d/1T9saNLr2DpKFdZM4FzxrcWPd6KWb9hf7g7479Nu2_tk/export?format=pdf"", ""Land Bank v. Catadman"")",3RD DIVISION,17 Jun 2020,DECISION
249,"=HYPERLINK(""https://docs.google.com/document/d/1aRBzpK_ISVV4hVnqbOQJMU9yVvlM7NFvurmTk3MZhmU/export?format=pdf"", ""BPI Family Savings Bank, Inc. v. Spouses Soriano"")",3RD DIVISION,08 Jun 2020,DECISION
250,"=HYPERLINK(""https://docs.google.com/document/d/16xDe60MhrSqSsaCaylO8fs5pWGLUwrMDZyjXuHZVOac/export?format=pdf"", ""People v. Manzanilla"")",3RD DIVISION,08 Jun 2020,DECISION
251,"=HYPERLINK(""https://docs.google.com/document/d/1sGMuJ08pTJRNwod9wgTDtoCo_YKHaowU2UHlEAL1nwk/export?format=pdf"", ""Nacarion v. People"")",3RD DIVISION,08 Jun 2020,DECISION
252,"=HYPERLINK(""https://docs.google.com/document/d/1wlIDG0oZZSR1V1kaSRmSx4qdflKioLv4-qd8JhFzyRo/export?format=pdf"", ""Violago v. Atty. Aranjuez, Jr."")",3RD DIVISION,09 Mar 2020,RESOLUTION`;

// --- 2. APP STATE ---
let allCases = [];
let sortConfig = { column: 0, direction: 'asc' }; // default sort by No.
const STORAGE_KEY = 'gaerlan_tracker_v1';

// --- 3. STORAGE HELPERS ---
function getStorageData() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
}

function updateStorage(caseId, field, value) {
    const data = getStorageData();
    if (!data[caseId]) data[caseId] = {};
    data[caseId][field] = value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    updateStats();
}

// --- 4. INITIALIZATION ---
async function init() {
    const lines = csvData.trim().split('\n');
    let savedData = getStorageData();
    allCases = [];

    // GITHUB PRELOAD LOGIC: Only preload if user storage is empty
    if (Object.keys(savedData).length === 0) {
        try {
            const response = await fetch('https://raw.githubusercontent.com/ariiannemay/2026-Bar-Exam-Tracker/main/data.json');
            if (response.ok) {
                const preloadedData = await response.json();
                localStorage.setItem(STORAGE_KEY, JSON.stringify(preloadedData));
                savedData = preloadedData;
                console.log("Digests preloaded from GitHub.");
            }
        } catch (err) {
            console.error("Could not load preload file:", err);
        }
    }

    // Parse CSV into objects
    for (let i = 1; i < lines.length; i++) {
        const row = lines[i];
        const firstComma = row.indexOf(',');
        const lastComma = row.lastIndexOf(',');
        const secondLastComma = row.lastIndexOf(',', lastComma - 1);
        const thirdLastComma = row.lastIndexOf(',', secondLastComma - 1);

        if (firstComma === -1 || lastComma === -1) continue;

        const no = row.substring(0, firstComma).trim();
        const division = row.substring(thirdLastComma + 1, secondLastComma).trim();
        const date = row.substring(secondLastComma + 1, lastComma).trim();
        const type = row.substring(lastComma + 1).trim();
        
        let rawLink = row.substring(firstComma + 1, thirdLastComma).trim();
        if (rawLink.startsWith('"') && rawLink.endsWith('"')) rawLink = rawLink.slice(1, -1);
        
        let url = "#", title = rawLink;
        const match = rawLink.match(/=HYPERLINK\(""([^"]+)""\s*,\s*""([^"]+)""\)/i);
        if (match) { url = match[1]; title = match[2]; }
        else { title = rawLink.replace(/^=HYPERLINK\("/, '').replace(/"\)$/, ''); }

        allCases.push({no, title, division, date, type, url});
    }
    
    if (typeof lucide !== 'undefined') lucide.createIcons();
    renderTable();
    updateStats();
}

// --- 5. TABLE RENDERING ---
function renderTable() {
    const tbody = document.getElementById('caseTableBody');
    if (!tbody) return;
    const savedData = getStorageData();
    const searchTerm = (document.getElementById('searchInput')?.value || '').toLowerCase();
    const filterDiv = document.getElementById('filterDivision')?.value || "";
    const filterType = document.getElementById('filterType')?.value || "";

    let filteredCases = allCases.filter(c => {
        const matchesSearch = c.title.toLowerCase().includes(searchTerm) ||
                              c.no.includes(searchTerm) ||
                              c.date.toLowerCase().includes(searchTerm);
        const matchesDiv = filterDiv === "" || c.division === filterDiv;
        const matchesType = filterType === "" || c.type === filterType;
        return matchesSearch && matchesDiv && matchesType;
    });

    const visibleCount = document.getElementById('visibleCount');
    if (visibleCount) visibleCount.innerText = filteredCases.length;

    // Sort Logic
    filteredCases.sort((a, b) => {
        let valA, valB;
        if (sortConfig.column === 0) { valA = parseInt(a.no); valB = parseInt(b.no); }
        else if (sortConfig.column === 1) { valA = a.title.toLowerCase(); valB = b.title.toLowerCase(); }
        else if (sortConfig.column === 2) { valA = a.division.toLowerCase(); valB = b.division.toLowerCase(); }
        else if (sortConfig.column === 3) { valA = new Date(a.date); valB = new Date(b.date); }
        else if (sortConfig.column === 4) { valA = a.type.toLowerCase(); valB = b.type.toLowerCase(); }

        if (valA < valB) return sortConfig.direction === 'asc' ? -1 : 1;
        if (valA > valB) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
    });

    let html = '';
    filteredCases.forEach(c => {
        const caseState = savedData[c.no] || {};
        const digestExists = caseState.digest && (caseState.digest.doctrine || caseState.digest.facts || caseState.digest.issue || caseState.digest.ruling);
        
        let divBadgeClass = "bg-gray-100 text-gray-600";
        if (c.division.includes("EN BANC")) divBadgeClass = "bg-red-100 text-red-800 border border-red-200";
        else if (c.division.includes("1ST")) divBadgeClass = "bg-blue-100 text-blue-800 border border-blue-200";
        else if (c.division.includes("2ND")) divBadgeClass = "bg-teal-100 text-teal-800 border border-teal-200";
        else if (c.division.includes("3RD")) divBadgeClass = "bg-orange-100 text-orange-800 border border-orange-200";

        const isDecision = c.type.toUpperCase().includes('DECISION');
        const typeBadgeClass = isDecision ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700';
        
        const digestBtnClass = digestExists ? 'bg-emerald-500 text-white shadow-md hover:bg-emerald-600' : 'bg-white text-gray-500 border border-gray-200 hover:border-black hover:text-black';
        const digestIcon = digestExists ? 'check' : 'plus';
        const digestText = digestExists ? 'View' : 'Add';

        html += `
        <tr class="hover:bg-gray-200 transition-colors group border-b border-gray-50 last:border-b-0">
            <td class="px-2 py-0.5 font-medium text-gray-400 text-[9px]">${c.no}</td>
            <td class="px-3 py-0.5"><a href="${c.url}" target="_blank" class="text-blue-700 hover:text-black font-bold text-sm block leading-tight group-hover:underline">${c.title}</a></td>
            <td class="px-3 py-0.5 text-center"><span class="px-2 py-0.5 inline-flex text-[10px] font-bold uppercase rounded-md tracking-wider ${divBadgeClass}">${c.division}</span></td>
            <td class="px-3 py-0.5 text-center text-xs text-gray-500 whitespace-nowrap font-medium">${c.date}</td>
            <td class="px-3 py-0.5 text-center"><span class="px-2 py-0.5 inline-flex text-[10px] font-bold uppercase rounded-md tracking-wider ${typeBadgeClass}">${c.type}</span></td>
            <td class="px-3 py-0.5 text-center">
                <button onclick="openDigestModal('${c.no}', '${c.title.replace(/'/g, "\\'")}')" class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide transition-all ${digestBtnClass}">
                    <i data-lucide="${digestIcon}" class="w-3 h-3"></i> ${digestText}
                </button>
            </td>
            <td class="px-3 py-0.5 text-center"><div class="flex justify-center"><input type="checkbox" class="custom-checkbox w-4 h-4" onchange="updateStorage('${c.no}', 'done', this.checked)" ${caseState.done ? 'checked' : ''}></div></td>
        </tr>`;
    });
    
    tbody.innerHTML = html;
    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// --- 6. UTILITIES (SORT/FILTER/TOGGLE) ---
function sortTable(columnIndex, type) {
    if (sortConfig.column === columnIndex) { sortConfig.direction = sortConfig.direction === 'asc' ? 'desc' : 'asc'; } 
    else { sortConfig.column = columnIndex; sortConfig.direction = 'asc'; }
    renderTable();
}

function filterTable() { 
    renderTable(); 
    if (document.getElementById('checkAll')) document.getElementById('checkAll').checked = false;
}

function toggleAll(masterCheckbox) {
    const isChecked = masterCheckbox.checked;
    const searchTerm = (document.getElementById('searchInput')?.value || '').toLowerCase();
    const filterDiv = document.getElementById('filterDivision')?.value || "";
    const filterType = document.getElementById('filterType')?.value || "";

    allCases.forEach(c => {
        const matchesSearch = c.title.toLowerCase().includes(searchTerm) || c.no.includes(searchTerm) || c.date.toLowerCase().includes(searchTerm);
        const matchesDiv = filterDiv === "" || c.division === filterDiv;
        const matchesType = filterType === "" || c.type === filterType;
        if (matchesSearch && matchesDiv && matchesType) { updateStorage(c.no, 'done', isChecked); }
    });
    renderTable();
}

// --- 7. STATS UPDATER ---
function updateStats() {
    const data = getStorageData();
    const total = allCases.length;
    let done = 0;
    Object.values(data).forEach(c => { if(c.done) done++; });
    const remaining = total - done;
    const donePercent = total > 0 ? (done / total) * 100 : 0;

    const hDone = document.getElementById('headerDone');
    const hRem = document.getElementById('headerRemaining');
    const hPer = document.getElementById('headerPercent');
    const hBar = document.getElementById('headerProgressBar');

    if (hDone) hDone.innerText = done;
    if (hRem) hRem.innerText = remaining;
    if (hPer) hPer.innerText = `${donePercent.toFixed(1)}%`;
    if (hBar) {
        hBar.style.width = `${donePercent}%`;
        hBar.classList.remove('bg-white', 'bg-red-500', 'bg-orange-500', 'bg-yellow-400', 'bg-green-500');
        if (donePercent <= 25) hBar.classList.add('bg-red-500');
        else if (donePercent <= 50) hBar.classList.add('bg-orange-500');
        else if (donePercent <= 75) hBar.classList.add('bg-yellow-400');
        else hBar.classList.add('bg-green-500');
    }
}

// --- 8. MODAL LOGIC ---
function openDigestModal(id, title) {
    const data = getStorageData();
    const caseData = data[id]?.digest || {};
    document.getElementById('currentCaseId').value = id;
    document.getElementById('modalCaseTitle').innerText = title;
    document.getElementById('noteDoctrine').value = caseData.doctrine || '';
    document.getElementById('noteFacts').value = caseData.facts || '';
    document.getElementById('noteIssue').value = caseData.issue || '';
    document.getElementById('noteRuling').value = caseData.ruling || '';
    
    const modal = document.getElementById('digestModal');
    if (!modal) return;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    setTimeout(() => { modal.firstElementChild.classList.remove('scale-95'); modal.firstElementChild.classList.add('scale-100'); }, 10);
}

function closeModal() {
    const modal = document.getElementById('digestModal');
    if (!modal) return;
    modal.firstElementChild.classList.remove('scale-100');
    modal.firstElementChild.classList.add('scale-95');
    setTimeout(() => { modal.classList.add('hidden'); modal.classList.remove('flex'); }, 300);
}

function saveDigest() {
    const id = document.getElementById('currentCaseId').value;
    const digest = {
        doctrine: document.getElementById('noteDoctrine').value,
        facts: document.getElementById('noteFacts').value,
        issue: document.getElementById('noteIssue').value,
        ruling: document.getElementById('noteRuling').value
    };
    updateStorage(id, 'digest', digest);
    renderTable();
    closeModal();
}

// --- 9. EXPORT TO WORD LOGIC ---
async function generateDocx(casesToExport, fileName) {
    if (typeof docx === 'undefined') return;
    const { Document, Packer, Paragraph, TextRun, AlignmentType, HeadingLevel, PageBreak } = docx;
    const children = [];

    casesToExport.forEach((c, index) => {
        const data = getStorageData()[c.no]?.digest || null;
        children.push(new Paragraph({ text: c.title.toUpperCase(), heading: HeadingLevel.HEADING_1, alignment: AlignmentType.CENTER }));
        children.push(new Paragraph({ text: `${c.date} | ${c.division}`, alignment: AlignmentType.CENTER, spacing: { after: 400 } }));

        const sections = [
            { label: "DOCTRINE / SYLLABUS", text: data?.doctrine },
            { label: "FACTS", text: data?.facts },
            { label: "ISSUE/S", text: data?.issue },
            { label: "RULING", text: data?.ruling }
        ];

        sections.forEach(s => {
            children.push(new Paragraph({ children: [new TextRun({ text: s.label, bold: true, underline: {} })], spacing: { before: 200 } }));
            children.push(new Paragraph({ text: s.text ? `- ${s.text}` : "No digest yet", alignment: AlignmentType.JUSTIFIED, spacing: { after: 200 } }));
        });
        if (index < casesToExport.length - 1) { children.push(new Paragraph({ children: [new PageBreak()] })); }
    });

    const doc = new Document({ sections: [{ properties: {}, children: children }] });
    Packer.toBlob(doc).then(blob => { if (typeof saveAs !== 'undefined') saveAs(blob, fileName); });
}

function exportSingleDigest() {
    const id = document.getElementById('currentCaseId').value;
    const caseObj = allCases.find(c => c.no === id);
    const safeTitle = caseObj.title.replace(/[^a-z0-9]/gi, '_').substring(0, 50);
    const safeDate = caseObj.date.replace(/[^a-z0-9]/gi, '_');
    generateDocx([caseObj], `${safeTitle}_${safeDate}.docx`);
}

function exportAllDigests() { generateDocx(allCases, "2026_Gaerlan_Cases.docx"); }

// --- 10. IMPORT LOGIC ---
function triggerImport() { document.getElementById('importInput')?.click(); }

function importDigests(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const importedData = JSON.parse(e.target.result);
            const currentData = getStorageData();
            const mergedData = { ...currentData, ...importedData };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedData));
            alert("Digests imported successfully!");
            const openId = document.getElementById('currentCaseId')?.value;
            if(openId) openDigestModal(openId, document.getElementById('modalCaseTitle').innerText); 
            renderTable();
            updateStats();
        } catch (err) { alert("Invalid file format."); }
    };
    reader.readAsText(file);
}

// --- START ---
init();
