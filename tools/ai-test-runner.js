import fetch from "node-fetch";
import fs from "fs";
import { execSync } from "child_process";

const MCP_SERVER_URL = "http://127.0.0.1:5002";
const TEST_SUITE_FILE = "Testsuite.md";
const REPORT_FILE = "reports/test-execution-report.html";

async function waitForMCPReady() {
  console.log("⏳ Waiting for MCP server to be ready...");
  let ready = false;
  for (let i = 0; i < 10; i++) {
    try {
      const res = await fetch(`${MCP_SERVER_URL}/health`);
      if (res.ok) {
        console.log("✅ MCP server is ready!");
        ready = true;
        break;
      }
    } catch {
      await new Promise(r => setTimeout(r, 2000));
    }
  }
  if (!ready) throw new Error("❌ MCP server not reachable.");
}

async function runTests() {
  await waitForMCPReady();

  console.log("🧠 Sending test suite to MCP server for execution...");
  execSync(
    `npx @playwright/mcp run --input ${TEST_SUITE_FILE} --output ${REPORT_FILE}`,
    { stdio: "inherit" }
  );

  console.log(`✅ Test Execution Report generated: ${REPORT_FILE}`);
}

runTests().catch(err => {
  console.error("❌ AI Test Runner failed:", err);
  process.exit(1);
});
