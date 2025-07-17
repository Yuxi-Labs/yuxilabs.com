import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function Page() {
    return (
        <main className="container mx-auto max-w-3xl px-4 py-16 text-white text-base leading-relaxed">
            <article className="space-y-6">
                <h1 className="text-3xl font-semibold mb-4">The GPTP File Format: A Foundation for Portability in Prompt Crafting</h1>
                <p className="text-sm text-gray-400">Written by Yuxi Labs · July 2025</p>

                <p>
                    The rapid evolution of Generative Pre-trained Transformers (GPTs) has created an ecosystem of prompt crafting that is still largely undocumented, fragmented, and tool-specific. Every workflow reinvents the wheel: ad hoc prompts stashed in note apps, scripts that only work with a specific API, obscure conventions passed around teams. As these systems become more complex—driven by chaining, versioning, variable injection, and deployment across model providers—the lack of standardization becomes a bottleneck.
                </p>

                <p>
                    In order to address this situation, we developed the GPT Prompt (GPTP) file format. It is a portable file format for defining and exchanging GPT-style prompts across tools, platforms, and runtimes. GPTP brings structure and semantics to the world of prompt crafting, not by prescribing a single way to prompt, but by offering a shared language that tools can read, validate, and render.
                </p>

                <p>
                    A <code>.gptp</code> file is a JSON-based document. It can define role-based messages, declare required variables, include metadata, and specify how a prompt should be rendered or validated. This makes it possible to load the same prompt into a web editor, a CLI script, or an IDE, with consistent results. Prompt Developers can inject variables, version their prompts, and collaborate across teams.
                </p>

                <p>Here's an example:</p>

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
                    Prompt Developers can write once and reuse across OpenAI’s GPT-4, Anthropic’s Claude, LLaMA-based systems, or any interface that supports chat-like inputs. Toolmakers can support GPTP as a source of truth for prompt design. It’s a bridge between humans and the LLM interfaces they’re crafting.
                </p>

                <p>
                    For Visual Studio Code users, the GPTP file format provides support for schema validation and features such as autocompletion. Prompt Developers can add a <code>$schema</code> property to their files and use the provided schema file locally or from a remote source.
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
                    CLI tools can validate and render prompts by injecting variables or transforming output for different models. IDE plugins can visualise variables and simulate runs. Web apps can host repositories of prompts with consistent behavior. And everywhere, the same underlying GPTP file format travels freely.
                </p>

                <p>
                    This is just the beginning. File formats that enable portability in prompt crafting are a missing piece in the tooling ecosystem around GPTs. The GPTP file format is not a final answer—it’s a start. It invites interpretation, extension, and iteration. But most of all, it offers a stable foundation.
                </p>

                <footer className="pt-12 space-y-2 text-base">
                    <p>
                        →{' '}
                        <a href="/gptp/specification" className="text-blue-400 hover:underline">
                            GPTP Specification
                        </a>
                    </p>
                    <p>
                        →{' '}
                        <a href="/gptp/schema" className="text-blue-400 hover:underline">
                            GPTP Schema
                        </a>
                    </p>
                    <p>
                        →{' '}
                        <a
                            href="https://github.com/Yuxi-Labs/gptp"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline"
                        >
                            GitHub Repository
                        </a>
                    </p>
                    <p>
                        ←{' '}
                        <a href="/" className="text-blue-400 hover:underline">
                            Back Home
                        </a>
                    </p>
                </footer>
            </article>
        </main>
    )
}
