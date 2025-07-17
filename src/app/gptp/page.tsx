export default function Page() {
    return (
        <main className="bg-black text-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-4xl">
                <header className="mb-12">
                    <h1 className="text-4xl font-semibold mb-4 tracking-tight">GPT Prompt Format (.gptp)</h1>
                    <p className="text-lg text-gray-300 max-w-2xl">
                        A structured, portable format for building, sharing, and validating prompts across LLM ecosystems.
                    </p>
                </header>

                <section className="space-y-6 text-base leading-relaxed text-gray-100">
                    <p>
                        The rapid evolution of large language models has created an ecosystem of prompt engineering that is
                        still largely undocumented, fragmented, and tool-specific. Every workflow reinvents the wheel: ad hoc
                        prompts stashed in note apps, scripts that only work with a specific API, obscure conventions passed
                        around teams. As these systems become more complex—driven by chaining, versioning, variable injection,
                        and deployment across model providers—the lack of standardization becomes a bottleneck.
                    </p>

                    <p>
                        GPTP is a portable file format for defining and exchanging GPT-style prompts across tools, platforms,
                        and runtimes. It brings structure and semantics to the world of prompt design, not by prescribing a
                        single way to prompt, but by offering a shared language that tools can read, validate, and render.
                    </p>

                    <p>
                        A <code className="bg-gray-800 px-1 rounded text-sm text-white">.gptp</code> file is a JSON document.
                        It can define role-based messages, declare required variables, include metadata, and specify how the
                        prompt should be rendered or validated. This makes it possible to load the same prompt into a web
                        editor, a CLI script, or an IDE, with consistent results.
                    </p>

                    <p className="text-sm uppercase tracking-wide text-gray-400 pt-6">Example</p>
                    <pre className="bg-gray-900 text-sm rounded-md p-4 overflow-x-auto border border-gray-700">
            <code className="language-json">
              {`{
  "name": "My Prompt",
  "description": "Writes an intro paragraph",
  "version": "1.0",
  "system": "You are a professional writer.",
  "messages": [{ "role": "user", "content": "Write an intro about {{topic}}" }],
  "variables": [{ "name": "topic", "required": true }]
}`}
            </code>
          </pre>

                    <p>
                        Prompt creators can write once and reuse across OpenAI’s GPT-4, Anthropic’s Claude, LLaMA-based
                        systems, or any interface that supports chat-like inputs. Toolmakers can support GPTP as a source of
                        truth for prompt design. It’s a bridge between humans and the LLM interfaces they’re crafting.
                    </p>

                    <p>
                        For VS Code users, GPTP supports schema validation and autocomplete. Just add a{' '}
                        <code className="bg-gray-800 px-1 rounded text-sm text-white">$schema</code> property to your file and
                        use the provided schema file locally or from a remote source.
                    </p>

                    <pre className="bg-gray-900 text-sm rounded-md p-4 overflow-x-auto border border-gray-700">
            <code className="language-json">
              {`{
  "$schema": "./schema/gptp.schema.json",
  "name": "...",
  "description": "...",
  "version": "1.0",
  "system": "You are a professional writer.",
  "messages": [{ "role": "user", "content": "..." }],
  "variables": [{ "name": "topic", "required": true }]
}`}
            </code>
          </pre>

                    <p>
                        CLI tools can validate and render prompts by injecting variables or transforming output for different
                        models. IDE plugins can visualize variables and simulate runs. Web apps can host repositories of
                        prompts with consistent behavior. And everywhere, the same underlying{' '}
                        <code className="bg-gray-800 px-1 rounded text-sm text-white">.gptp</code> format travels freely.
                    </p>

                    <p>
                        This is just the beginning. Prompt formats are a missing piece in the tooling ecosystem around LLMs.
                        GPTP is not a final answer—it’s a start. It invites interpretation, extension, and iteration. But most
                        of all, it offers a stable foundation.
                    </p>

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
                </section>
            </div>
        </main>
    );
}
