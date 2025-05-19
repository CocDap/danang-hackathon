import { expect } from "chai";
import { ethers } from "hardhat";
import { HardhatEthersSigner } from "@nomicfoundation/hardhat-ethers/signers";
import { 
    LendingBorrowing,
    MockERC20
} from "../typechain-types";

describe("LendingBorrowing", function () {
    let lendingBorrowing: LendingBorrowing;
    let collateralToken: MockERC20;
    let lendingToken: MockERC20;
    let owner: HardhatEthersSigner;
    let user1: HardhatEthersSigner;
    let user2: HardhatEthersSigner;
    
    const COLLATERAL_FACTOR: bigint = 50n; // 50%
    const INITIAL_SUPPLY: bigint = ethers.parseEther("1000000"); // 1 million tokens

    beforeEach(async function () {
        [owner, user1, user2] = await ethers.getSigners();
        console.log(owner.address);
        console.log(user1.address);
        console.log(user2.address);

        // Deploy tokens
        const CollateralToken = await ethers.getContractFactory("MockERC20");
        collateralToken = await CollateralToken.deploy("Collateral Token", "CTK") as MockERC20;
        await collateralToken.waitForDeployment();

        const LendingToken = await ethers.getContractFactory("MockERC20");
        lendingToken = await LendingToken.deploy("Lending Token", "LTK") as MockERC20;
        await lendingToken.waitForDeployment();

        // // // Mint initial supply to owner
        await collateralToken.connect(owner).mint(owner.address, INITIAL_SUPPLY);
        await lendingToken.connect(owner).mint(owner.address, INITIAL_SUPPLY);

        // // Deploy LendingBorrowing contract
        const LendingBorrowing = await ethers.getContractFactory("LendingBorrowing");
        lendingBorrowing = await LendingBorrowing.deploy(
            await collateralToken.getAddress(),
            await lendingToken.getAddress(),
            COLLATERAL_FACTOR
        ) as LendingBorrowing;
        await lendingBorrowing.waitForDeployment();

        // // Transfer some tokens to users for testing
        // await collateralToken.transfer(user1.address, ethers.parseEther("1000"));
        // await lendingToken.transfer(await lendingBorrowing.getAddress(), ethers.parseEther("100000"));
    });

    describe("Contract Deployment", function () {
        it("Should set the correct collateral factor", async function () {
            expect(await lendingBorrowing.collateralFactor()).to.equal(COLLATERAL_FACTOR);
        });

        it("Should set the correct token addresses", async function () {
            console.log(await collateralToken.getAddress());
        });
    });

    // describe("Collateral Management", function () {
    //     const depositAmount: bigint = ethers.parseEther("100");

    //     beforeEach(async function () {
    //         await collateralToken.connect(user1).approve(await lendingBorrowing.getAddress(), depositAmount);
    //     });

    //     it("Should allow users to deposit collateral", async function () {
    //         await expect(lendingBorrowing.connect(user1).depositCollateral(depositAmount))
    //             .to.emit(lendingBorrowing, "CollateralDeposited")
    //             .withArgs(user1.address, depositAmount);

    //         expect(await lendingBorrowing.collateralBalances(user1.address)).to.equal(depositAmount);
    //     });

    //     it("Should not allow zero amount deposits", async function () {
    //         await expect(lendingBorrowing.connect(user1).depositCollateral(0n))
    //             .to.be.revertedWith("Amount must be greater than zero");
    //     });

    //     it("Should allow users to withdraw collateral if no active loan", async function () {
    //         await lendingBorrowing.connect(user1).depositCollateral(depositAmount);
            
    //         await expect(lendingBorrowing.connect(user1).withdrawCollateral(depositAmount))
    //             .to.emit(lendingBorrowing, "CollateralWithdrawn")
    //             .withArgs(user1.address, depositAmount);

    //         expect(await lendingBorrowing.collateralBalances(user1.address)).to.equal(0n);
    //     });

    //     it("Should not allow withdrawal of locked collateral", async function () {
    //         await lendingBorrowing.connect(user1).depositCollateral(depositAmount);
    //         await lendingBorrowing.connect(user1).takeLoan(ethers.parseEther("40")); // 40% of collateral

    //         await expect(lendingBorrowing.connect(user1).withdrawCollateral(depositAmount))
    //             .to.be.revertedWith("Cannot withdraw collateral locked for a loan");
    //     });
    // });

    // describe("Loan Operations", function () {
    //     const collateralAmount: bigint = ethers.parseEther("100");
    //     const loanAmount: bigint = ethers.parseEther("40"); // 40% of collateral

    //     beforeEach(async function () {
    //         await collateralToken.connect(user1).approve(await lendingBorrowing.getAddress(), collateralAmount);
    //         await lendingBorrowing.connect(user1).depositCollateral(collateralAmount);
    //     });

    //     it("Should allow users to take loans within collateral limit", async function () {
    //         await expect(lendingBorrowing.connect(user1).takeLoan(loanAmount))
    //             .to.emit(lendingBorrowing, "LoanTaken")
    //             .withArgs(user1.address, loanAmount);

    //         const loanDetails = await lendingBorrowing.getLoanDetails(user1.address);
    //         expect(loanDetails.amount).to.equal(loanAmount);
    //         expect(loanDetails.isActive).to.be.true;
    //     });

    //     it("Should not allow loans exceeding collateral limit", async function () {
    //         const excessiveLoan: bigint = ethers.parseEther("60"); // 60% of collateral
    //         await expect(lendingBorrowing.connect(user1).takeLoan(excessiveLoan))
    //             .to.be.revertedWith("Loan exceeds collateral limit");
    //     });

    //     it("Should not allow multiple active loans", async function () {
    //         await lendingBorrowing.connect(user1).takeLoan(loanAmount);
    //         await expect(lendingBorrowing.connect(user1).takeLoan(loanAmount))
    //             .to.be.revertedWith("Existing loan must be repaid first");
    //     });

    //     it("Should allow users to repay loans", async function () {
    //         await lendingBorrowing.connect(user1).takeLoan(loanAmount);
    //         await lendingToken.connect(user1).approve(await lendingBorrowing.getAddress(), loanAmount);

    //         await expect(lendingBorrowing.connect(user1).repayLoan(loanAmount))
    //             .to.emit(lendingBorrowing, "LoanRepaid")
    //             .withArgs(user1.address, loanAmount);

    //         const loanDetails = await lendingBorrowing.getLoanDetails(user1.address);
    //         expect(loanDetails.amount).to.equal(0n);
    //         expect(loanDetails.isActive).to.be.false;
    //     });

    //     it("Should not allow repayment of non-existent loans", async function () {
    //         await expect(lendingBorrowing.connect(user1).repayLoan(loanAmount))
    //             .to.be.revertedWith("No active loan");
    //     });
    // });

    // describe("Owner Functions", function () {
    //     it("Should allow owner to change collateral factor", async function () {
    //         const newFactor: bigint = 60n;
    //         await lendingBorrowing.connect(owner).setCollateralFactor(newFactor);
    //         expect(await lendingBorrowing.collateralFactor()).to.equal(newFactor);
    //     });

    //     it("Should not allow non-owners to change collateral factor", async function () {
    //         await expect(lendingBorrowing.connect(user1).setCollateralFactor(60n))
    //             .to.be.revertedWithCustomError(lendingBorrowing, "OwnableUnauthorizedAccount");
    //     });

    //     it("Should not allow collateral factor greater than 100", async function () {
    //         await expect(lendingBorrowing.connect(owner).setCollateralFactor(101n))
    //             .to.be.revertedWith("Collateral factor must be <= 100");
    //     });
    // });
});
