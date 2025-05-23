
## Challenge details

Polkadot SDK provides a framework for building custom blockchains (parachains) with modular runtime pallets. It enables developers to create specialized blockchain solutions with custom functionality.

## Hackers can choose one of the following features: 

1. Vesting:

+ Vesting schedule creation 
+ Vesting amount calculation 
+ Vesting claim processing 
+ Vesting schedule updates

2. Native Pool:

NativePool provides a service where people can deposit native token and they will receive daily rewards. Users must be able to take out their deposits along with their portion of rewards at any time. New rewards are deposited manually into the pool by the NativePool team each daily using a contract function. 

- Requirements: 

+ Only the team can deposit rewards. 
+ Deposited rewards go to the pool of users, not to individual users. 
+ Users should be able to withdraw their deposits along with their share of rewards considering the time when they deposited.




## Submission Requirements 
- [ ] Finish `pallet-vesting`/ `pallet-native-pool` runtime 
- [ ] Finish mocks and tests 
- [ ] Record a video that run/simulate the logic on Polkadot JS explorer. 






