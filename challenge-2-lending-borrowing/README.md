
<div align="center">

![Group 225](https://github.com/user-attachments/assets/e8b0cc06-1adb-417a-be5c-44542fe92269)

# OpenGuild Hackcamp Da Nang PolkaVM Challenges

</div>

## (Optional) Setup environment and register for the challenges

TLDR: If you are not familiar with Git & Github, follow these steps below to fork and setup your own repository.

- Step 1: Install Git & Github Desktop (optional) on your local device
- Step 2: Fork this repository by click the `Fork button` on Github

![image](https://github.com/openguild-labs/open-hack-rust-starter/assets/56880684/7fa2f01a-b523-4208-92db-d8af7a274d98)

- Step 3: `Clone` the forked repository to your local device using the below command

```sh
git clone https://github.com/<your_github_username>/open-danang-hackcamp-2025.git
```

Replace the `[name-of-your-account]` with your Github username. For example, if my username is `chungquantin`, I would do the below command to clone the repository to my local device.

```sh
git clone https://github.com/openguild-labs/open-danang-hackcamp-2025.git
```

- Step 4: Edit the `README.md` file to register for official participation

Go to **Participant Registration** section and register to be the workshop participants. Add the below to the list, replace any placeholder with your personal information.

```
| 🦄 | Name | Github username | Your current occupation |
```

- Step 5: `Commit` your code and push to the forked Github repository

```
git add .
git commit -m "<Your Name> | Register for OpenGuild Da Nang Hackcamp 2025"
```

- Step 6: Create a `Pull Request` to merge your changes to this repository and name your PR as `Your name | Register for Da Nang Hackcamp 2025`

<img width="1166" alt="Screenshot 2024-04-19 at 16 23 45" src="https://github.com/openguild-labs/open-hack-rust-starter/assets/56880684/7554ca7d-da68-4a23-893a-4f2c11a78d37">

<br/>

<div align="center">

## Discover the List of Challenges 🏆

Total prize pool: 1500$ / 10 submissions

| Challenge | Description                                                                                                                                                                                                      | Action                                               | Bounty |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ------ |
| 1         | Solve a token vesting smart contract challenge and [deploy on Westend Asset Hub](https://contracts.polkadot.io/deploy-your-first-contract)                                                                       | [Take Challenge](./challenge-1-vesting/README.md)    | $50    |
| 2         | Solve a yield farming smart contract challenge and [deploy on Westend Asset Hub](https://contracts.polkadot.io/deploy-your-first-contract)                                                                       | [Take Challenge](./challenge-2-yield-farm/README.md) | $50    |
| 3         | Build frontend with [DOT UI Kit](https://github.com/openguild-labs/dotui.git) for the [token vesting](./challenge-2-yield-farm/README.md) or [yield farming](./challenge-2-yield-farm/README.md) smart contract. | [Take Challenge](./challenge-3-frontend/README.md)   | $50    |

## Resources for Development 🧑‍💻

- [Solidity smart contract development on Polkadot Hub](https://contracts.polkadot.io/tutorial/)
- [Open Polkadot Bootcamp - Solidity on PolkaVM](https://www.youtube.com/watch?v=EFTMgkqZDNE&list=PLnhzaKpksqOK6H4_iG4oSMXhNNS0gvpdi)

</div>

<br/>

## 👉 Contribute to OpenGuild Community

OpenGuild is a builder-driven community centered around Polkadot. OpenGuild is built by Web3 builders for Web3 builders. Our primary aim is to cater to developers seeking a comprehensive understanding of the Polkadot blockchain, providing curated, in-depth materials with a low-level approach.

- **About us:** [Learn more about us](https://openguild.wtf/about)
- **Website:** [OpenGuild Website](https://openguild.wtf/)
- **Github:** [OpenGuild Labs](https://github.com/openguild-labs)
- **Discord**: [Openguild Discord Channel](https://discord.gg/bcjMzxqtD7)





Core Requirements
1. Basic Protocol Implementation
[ ] Implement collateral deposit and withdrawal
[ ] Implement loan taking and repayment
[ ] Handle token transfers correctly
[ ] Implement proper event emissions
2. Security Requirements
[ ] Implement access control
[ ] Add input validation
[ ] Ensure safe token transfers
[ ] Protect against common vulnerabilities
3. Testing Requirements
[ ] Write basic test cases
[ ] Test all main functions
[ ] Test edge cases
[ ] Verify event emissions
Submission Requirements
1. Code Submission
[ ] Smart contract code
[ ] Create tests 
2. Deployment
[ ] Deploy to Westend Asset Hub


