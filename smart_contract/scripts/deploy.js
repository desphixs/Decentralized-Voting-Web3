const main = async () => {
    const Voting = await hre.ethers.getContractFactory("Voting");

    const voting = await Voting.deploy();
    await voting.deployed();

    console.log("Voting contract deployed to: ", voting.address);
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
