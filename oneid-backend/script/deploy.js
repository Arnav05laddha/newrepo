import { ethers } from "hardhat";

async function main() {
  const DIDRegistry = await ethers.getContractFactory("DIDRegistry");
  const didRegistry = await DIDRegistry.deploy();
  await didRegistry.deployed();
  console.log("DIDRegistry deployed to:", didRegistry.address);

  const CredentialManager = await ethers.getContractFactory("CredentialManager");
  const credentialManager = await CredentialManager.deploy();
  await credentialManager.deployed();
  console.log("CredentialManager deployed to:", credentialManager.address);

  const SelectiveDisclosure = await ethers.getContractFactory("SelectiveDisclosure");
  const selectiveDisclosure = await SelectiveDisclosure.deploy();
  await selectiveDisclosure.deployed();
  console.log("SelectiveDisclosure deployed to:", selectiveDisclosure.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
