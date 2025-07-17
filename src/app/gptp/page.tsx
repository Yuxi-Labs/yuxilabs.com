import React from 'react'

export default function Page() {
    return (
        <main className="container mx-auto max-w-3xl px-4 py-16 text-white">
            <article className="space-y-6 text-base leading-relaxed">
                <header className="mb-12">
                    <h1 className="text-3xl font-semibold mb-2">GPT Prompt Format (.gptp)</h1>
                    <p className="text-sm text-gray-400">Yuxi Labs · July 2025</p>
                </header>

                <p>
                    The rapid evolution of large language models has produced a fragmented ecosystem of prompt engineering. Workflows remain inconsistent: prompts live in notes apps, scripts are tightly coupled to single APIs, and informal conventions circulate within isolated teams. As complexity increases—driven by prompt chaining, variable injection, version control, and deployment across multiple model providers—the absence of a portable, structured format has become a critical bottleneck.
                </p>

                <p>
                    GPTP (.gptp) is a structured JSON format for defining and exchanging GPT-style prompts. It enables portability across tools, platforms, and runtimes by introducing schema-driven semantics to prompt design. The format is not prescriptive. Instead, it establishes a shared structure that can be read, validated, and rendered consistently.
                </p>

                <p>
                    A .gptp file defines role-based messages, declares variables, includes metadata, and specifies rendering preferences. The same prompt can be loaded into a CLI runner, IDE, or web editor—injecting variables, enforcing validation, and producing consistent outputs.
                </p>

                <div className="bg-gray-800 rounded-md overflow-x-auto text-sm">
          <pre className="p-4">
            <code className="language-json">
{`{
  "name": "My Prompt",
  "description": "Writes an intro paragraph",
  "version": "1.0",
  "system": "You are a professional writer.",
  "messages": [
    { "role": "user", "content": "Write an intro about {{topic}}" }
  ],
  "variables": [
    { "name": "topic", "required": true }
  ]
}`}
            </code>
          </pre>
                </div>

                <p>
                    Prompts authored in GPTP can be rendered for OpenAI’s GPT-4 Turbo, Claude 3, LLaMA-based models, or any compatible interface. Tools can parse and transform GPTP files to match provider-specific formats. The format acts as a source of truth for prompt creators, developers, and system integrators.
                </p>

                <p>
                    When used in environments like Visual Studio Code, GPTP supports JSON Schema validation and autocomplete. Editors recognize the structure as soon as a <code className="bg-gray-700 px-1 py-0.5 rounded text-sm">"$schema"</code> field is defined.
                </p>

                <div className="bg-gray-800 rounded-md overflow-x-auto text-sm">
          <pre className="p-4">
            <code className="language-json">
{`{
  "$schema": "./schema/gptp.schema.json",
  "name": "...",
  "description": "...",
  "version": "1.0",
  "system": "You are a professional writer.",
  "messages": [
    { "role": "user", "content": "..." }
  ],
  "variables": [
    { "name": "topic", "required": true }
  ]
}`}
            </code>
          </pre>
                </div>

                <p>
                    Developers can use CLI tools to validate prompts, inject runtime variables, and render content across models. IDE plugins can visualize prompt structure and preview output. Web-based prompt builders can integrate GPTP as a native format for import/export.
                </p>

                <p>
                    GPTP is a foundation. It does not attempt to dictate how to prompt, only how to describe a prompt clearly and consistently. It supports extensibility, tooling, and interoperability at a time when prompt-based systems are evolving rapidly.
                </p>

                <footer className="pt-8 border-t border-gray-700">
                    <p>
                        Read the <a href="/spec" className="text-blue-400 underline">Human-Readable Specification</a>, view the
                        <a href="https://github.com/Yuxi-Labs/gptp" className="text-blue-400 underline mx-1">GitHub Repository</a>, or
                        inspect the <a href="/schema/gptp.schema.json" className="text-blue-400 underline">GPTP Schema</a>.
                    </p>
                </footer>
            </article>
        </main>
    )
}
