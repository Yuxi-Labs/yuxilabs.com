import React from 'react'
import Link from 'next/link'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function Page() {
    return (
        <main className="container mx-auto max-w-3xl px-4 py-16 text-white text-base leading-relaxed">
            <article className="space-y-6">
                <h1 className="text-3xl font-semibold mb-4">The GPTP File Format: A Foundation for Portability in Prompt Crafting</h1>
                <p className="text-sm text-gray-400">Written by Yuxi Labs · July 2025</p>

                <p>
                    The rapid evolution of Generative Pre-trained Transformers (GPTs) has created an ecosystem of prompt crafting that is still largely undocumented, fragmented, and tool-specific. Every workflow reinvents the wheel—prompts saved in note apps, scripts tied to a single API, undocumented behaviors passed between teams. As these systems grow more complex—with chaining, versioning, variable injection, and deployment across model providers—the absence of a shared format creates unnecessary friction.
                </p>

                <p>
                    GPTP is a JSON-based file format for describing, exchanging, and reusing structured prompts across tools and platforms. It defines a consistent structure for role-based messages, variables, metadata, and rendering behavior—allowing prompts to move cleanly between environments without rework.
                </p>

                <p>
                    Files using the <code>.gptp</code> extension follow the GPTP format. This naming convention makes them recognizable to tools and editors that support it. The format itself is structured, predictable, and designed to support validation, reuse, and collaboration.
                </p>

                <p>Example:</p>

                <SyntaxHighlighter language="json" style={oneDark} customStyle={{ borderRadius: '0.5rem' }}>
                    {`{
  "name": "My Prompt",
  "description": "Writes an intro paragraph",
  "version": "1.0",
  "system": "You are a professional writer.",
  "messages": [{ "role": "user", "content": "Write an intro about {{topic}}" }],
  "variables": [{ "name": "topic", "required": true }]
}`}
                </SyntaxHighlighter>

                <p>
                    Prompts written in GPTP can be reused across OpenAI’s GPT-4, Anthropic’s Claude, LLaMA-based systems, and any other interface that supports structured, multi-message input. Toolmakers can treat GPTP as a source of truth. Teams can share, version, and deploy prompts consistently.
                </p>

                <p>
                    In Visual Studio Code, developers can enable schema validation and autocomplete by including a <code>$schema</code> field that references a local or remote GPTP schema.
                </p>

                <SyntaxHighlighter language="json" style={oneDark} customStyle={{ borderRadius: '0.5rem' }}>
                    {`{
  "$schema": "./schema/gptp.schema.json",
  "name": "...",
  "description": "...",
  "version": "1.0",
  "system": "You are a professional writer.",
  "messages": [{ "role": "user", "content": "..." }],
  "variables": [{ "name": "topic", "required": true }]
}`}
                </SyntaxHighlighter>

                <p>
                    CLI tools can validate and render prompts by injecting variables or transforming output for different models. IDE plugins can simulate runs or visualize variables. Web apps can host libraries of versioned, reusable prompt files. And across all of them, the same GPTP structure holds.
                </p>

                <p>
                    GPTP fills a critical gap in the GPT ecosystem: portability. It gives developers and teams a stable, structured way to design prompts that can move across tools, environments, and providers without rewriting or reverse-engineering. As prompt workflows grow more complex and more collaborative, GPTP makes them manageable, shareable, and scalable.
                </p>

                <footer className="pt-12 space-y-2 text-base">
                    <p>
                        →{' '}
                        <Link href="/gptp/specification" className="text-blue-400 hover:underline">
                            GPTP Specification
                        </Link>
                    </p>
                    <p>
                        →{' '}
                        <Link href="/gptp/schema" className="text-blue-400 hover:underline">
                            GPTP Schema
                        </Link>
                    </p>
                    <p>
                        →{' '}
                        <Link
                            href="https://github.com/Yuxi-Labs/gptp"
                            className="text-blue-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub Repository
                        </Link>
                    </p>
                    <p>
                        ←{' '}
                        <Link href="/" className="text-blue-400 hover:underline">
                            Back Home
                        </Link>
                    </p>
                </footer>
            </article>
        </main>
    )
}
