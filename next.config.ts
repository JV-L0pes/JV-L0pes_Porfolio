import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // o build gera AGENTS.md e CLAUDE.md por padrao; nao queremos esses
  // arquivos no repositorio
  agentRules: false,
};

export default nextConfig;
