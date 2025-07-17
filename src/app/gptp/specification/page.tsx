import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

export default function Page() {
    return (
        <main className="container mx-auto max-w-3xl px-4 py-16 text-white text-base leading-relaxed">
            <article className="space-y-6">
                <h1 className="text-3xl font-semibold mb-4">GPTP Specification</h1>
                <p className="text-sm text-gray-400">Written by Yuxi Labs · July 2025</p>

                <p>
                    This page documents the formal structure of a <code className="text-blue-300">.gptp</code> prompt file using JSON.
                    Each field is annotated with its purpose, expected type, and behavior in tooling that supports GPTP.
                </p>

                <SyntaxHighlighter language="json" style={oneDark} customStyle={{ borderRadius: '0.5rem' }}>
                    {`{
  "$schema": "./schema/gptp.schema.json", // Enables schema validation & autocomplete

  "name": "string",                        // Title of the prompt
  "description": "string",                 // What it does
  "version": "string",                     // Format version (e.g. "1.0")

  "system": "string",                      // Optional system prompt (instructions to the assistant)

  "messages": [                            // Core prompt turns (chat style)
    {
      "role": "system" | "user" | "assistant",
      "content": "string"
    }
  ],

  "variables": [                           // Optional: templated inputs
    {
      "name": "string",                    // e.g. "topic"
      "description": "string",             // Helpful for UI/display
      "required": true | false,
      "example": "string"                  // Optional example value
    }
  ],

  "metadata": {                            // Optional extra info
    "tags": ["string"],                    // Keywords
    "created_by": "string",                // Author or org
    "created_at": "2025-07-09T16:00:00Z",  // ISO 8601 format
    "model_compatibility": [               // Compatible GPT-style models
      "gpt-4",
      "gpt-3.5-turbo",
      "claude-3-opus"
    ]
  },

  "rendering": {                           // UI/display hints
    "style": "chat" | "single-shot" | "template",     // Preferred UI format
    "instructions_position": "top" | "inline" | "none" // Where system prompt appears in UI
  },

  "output_format": "markdown" | "json" | "plain-text" | "html" // Optional: expected response format

  // Future support (optional)
  // "extends": "./base-prompt.gptp"        // Optional: inherit fields from another prompt
}`}
                </SyntaxHighlighter>

                <footer className="pt-12 space-y-2 text-base">
                    <p>
                        →{' '}
                        <a href="/schema/gptp.schema.json" className="text-blue-400 hover:underline">
                            GPTP Schema
                        </a>
                    </p>
                    <p>
                        →{' '}
                        <a href="/spec" className="text-blue-400 hover:underline">
                            Human-Readable Specification
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
                </footer>
            </article>
        </main>
    )
}
