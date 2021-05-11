module.exports = {
  sidebar: {
    Intro: [
      "intro",
      "snakenet"
    ],
    "How-to": [
      "claim",
      "start_nominating",
      "start_validating",
      "identity",
      {
        type: "category",
        label: "Connect to a Node",
        items: ["polkadotjs_apps_local", "polkadotjs_apps_public"],
      }
    ],
    "Learn": [
      "staking",
      "staking_rewards",
      "slashing"
    ],
    "Maintain": [
      "node_setup",
      "performance_benchmark",
      "node_monitoring"
    ],
    Build: [
      "build_dev_chain"
    ],
    Contribute: ["contributing"]
  },
};
