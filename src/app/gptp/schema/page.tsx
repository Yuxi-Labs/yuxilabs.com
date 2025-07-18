import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Link from "next/link";

export default function Page() {
    return (
        <main className="container mx-auto max-w-3xl px-4 py-16 text-white text-base leading-relaxed">
            <article className="space-y-6">
                <h1 className="text-3xl font-semibold mb-4">GPTP Schema (Draft 1.0)</h1>
                <p className="text-sm text-gray-400">Published by Yuxi Labs · July 2025</p>

                <p>
                    The GPTP Schema defines the machine-readable contract for validating .gptp files. This schema
                    ensures structural correctness, establishes type rules, and enables integrations with tooling
                    such as IDEs, editors, CLIs, and web-based renderers.
                </p>

                <SyntaxHighlighter language="json" style={oneDark} customStyle={{ borderRadius: '0.5rem' }}>
                    {`{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "https://example.com/gptp.schema.json",
  "title": "GPT Prompt Package (.gptp)",
  "type": "object",
  "required": ["name", "description", "version", "messages"],
  "additionalProperties": false,
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "The name of the prompt"
    },
    "description": {
      "type": "string",
      "minLength": 1,
      "description": "What this prompt does"
    },
    "version": {
      "type": "string",
      "pattern": "^[0-9]+\\.[0-9]+$",
      "description": "The version of the .gptp format being used (e.g. '1.0')"
    },
    "system": {
      "type": "string",
      "minLength": 1,
      "description": "Optional system-level instruction to the model"
    },
    "messages": {
      "type": "array",
      "minItems": 1,
      "description": "Ordered list of messages making up the conversation prompt",
      "items": {
        "type": "object",
        "required": ["role", "content"],
        "additionalProperties": false,
        "properties": {
          "role": {
            "type": "string",
            "enum": ["system", "user", "assistant"],
            "description": "The role of the message sender"
          },
          "content": {
            "type": "string",
            "minLength": 1,
            "description": "The actual text content of the message"
          }
        }
      }
    },
    "variables": {
      "type": "array",
      "description": "Optional list of input variables the prompt requires",
      "items": {
        "type": "object",
        "required": ["name"],
        "additionalProperties": false,
        "properties": {
          "name": {
            "type": "string",
            "minLength": 1,
            "description": "Name of the variable (used as {{name}})"
          },
          "description": {
            "type": "string",
            "description": "Optional explanation of the variable’s purpose"
          },
          "required": {
            "type": "boolean",
            "default": true
          },
          "example": {
            "type": "string",
            "description": "Optional example value for this variable"
          }
        }
      }
    },
    "metadata": {
      "type": "object",
      "description": "Optional metadata about the prompt",
      "additionalProperties": false,
      "properties": {
        "tags": {
          "type": "array",
          "items": {
            "type": "string",
            "minLength": 1
          }
        },
        "created_by": {
          "type": "string"
        },
        "created_at": {
          "type": "string",
          "format": "date-time"
        },
        "model_compatibility": {
          "type": "array",
          "minItems": 1,
          "items": {
            "type": "string",
            "enum": [
              "gpt-3.5-turbo",
              "gpt-4",
              "gpt-4-turbo",
              "claude-2",
              "claude-3-opus",
              "llama-2",
              "llama-3",
              "mistral",
              "command-r"
            ]
          }
        }
      }
    },
    "rendering": {
      "type": "object",
      "description": "Optional display and UX hints for UI-based tools",
      "additionalProperties": false,
      "properties": {
        "style": {
          "type": "string",
          "enum": ["chat", "single-shot", "template"],
          "description": "UI style for rendering this prompt"
        },
        "instructions_position": {
          "type": "string",
          "enum": ["top", "inline", "none"],
          "description": "Where to place system instructions"
        }
      }
    },
    "output_format": {
      "type": "string",
      "enum": ["markdown", "json", "plain-text", "html"],
      "description": "Expected format of the model output"
    },
    "extends": {
      "type": "string",
      "description": "Optional path to another .gptp file to extend"
    }
  }
}`}
                </SyntaxHighlighter>

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
