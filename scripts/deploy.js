const hre = require("hardhat");

async function main() {
    const FormaNFT = await hre.ethers.getContractFactory("FormaNFT");
    console.log("Deploying FormaNFT...");

    const formaNFT = await FormaNFT.deploy();
    await formaNFT.waitForDeployment();

    const formaNFTAddress = await formaNFT.getAddress();
    console.log("FormaNFT deployed to:", formaNFTAddress);

    // Verify contract on Forma Explorer (nếu có)
    // await hre.run("verify:verify", {
    //   address: formaNFTAddress,
    //   constructorArguments: [],
    // });
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    }); 