// Konten dari file-file statis Anda
// Salin dan tempelkan seluruh isi file Anda ke dalam variabel string di bawah ini

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
    <title>Lunar A.I+</title>
    <link rel="stylesheet" href="style.css">
    <!-- [INI DITAMBAHKAN] CSS untuk tema highlight.js -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css">
</head>
<body>

    <div id="authContainer" class="auth-container">
        <div class="auth-box" id="loginBox" style="display: none;">
            <h1>Sign in</h1>
            <p>Empower your experience, sign in to your account.</p>
            <form id="loginForm">
                <div class="input-group">
                    <label for="loginEmail">Email Address*</label>
                    <input type="email" id="loginEmail" required>
                </div>
                <div class="input-group">
                    <label for="loginPassword">Password*</label>
                    <input type="password" id="loginPassword" required>
                </div>
                <button type="submit" class="main-button">Login</button>
            </form>
            <div class="auth-switch">
                <p>Don't have an account? <a href="#" id="showSignUp">Sign up</a></p>
            </div>
        </div>

        <div class="auth-box" id="signUpBox">
            <h1>Sign up with free trail</h1>
            <p>Empower your experience, sign up for a free account today.</p>
            <form id="signUpForm">
                <div class="input-group">
                    <label for="signUpName">Your Name*</label>
                    <input type="text" id="signUpName" required>
                </div>
                <div class="input-group">
                    <label for="signUpEmail">Email Address*</label>
                    <input type="email" id="signUpEmail" placeholder="ex.email@domain.com" required>
                </div>
                <div class="input-group">
                    <label for="signUpPassword">Password*</label>
                    <input type="password" id="signUpPassword" placeholder="Enter password" required>
                </div>
                <button type="submit" class="main-button">Get started free</button>
            </form>
            <div class="social-login-divider">
                <span>Or better yet...</span>
            </div>
            <div class="social-logins">
                 <button class="social-button">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo">
                    Continue with Google
                </button>
                <button class="social-button">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Logo" class="apple-logo">
                    Continue with Apple
                </button>
            </div>
            <div class="auth-switch">
                <p>Already have an account? <a href="#" id="showLogin">Login</a></p>
            </div>
        </div>
    </div>

    <div id="appContainer" class="app-container">
        <div class="sidebar-overlay" id="sidebarOverlay"></div>
        
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <h1>Lunar A.I+</h1>
            </div>
            <button class="new-chat-btn" id="newChatBtn">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>
                New chat
            </button>
            <div class="conversations-header">
                <span>Your conversations</span>
                <a href="#" id="clearAllBtn">Clear All</a>
            </div>
            <div class="conversations" id="conversationsList"></div>
            <div class="sidebar-footer">
                <div class="settings-btn" id="settingsBtn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="settings-icon" viewBox="0 0 16 16"><path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zm-2.633.283c.229-.774 1.933-.774 2.162 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.291a1.873 1.873 0 0 0 1.115 2.694l.319.094c.774.229.774 1.933 0 2.162l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.292c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.694 1.115l-.094.319c-.229.774-1.933-.774-2.162 0l-.094-.319a1.873 1.873 0 0 0-2.693-1.115l-.291.16c-.764.415-1.6-.42-1.184-1.185l.159.291A1.873 1.873 0 0 0 5.166 9.83l-.319-.094c-.774-.229-.774-1.933 0-2.162l.319.094a1.873 1.873 0 0 0 1.115-2.693l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.291.159a1.873 1.873 0 0 0 2.694-1.115l.094-.319z"/><path d="M8 5.754a2.246 2.246 0 1 1 0 4.492 2.246 2.246 0 0 1 0-4.492z"/></svg>
                    Settings
                </div>
                <div class="user-profile">
                    <div class="user-avatar"></div>
                    <span id="userNameDisplay">Andrew Nelson</span>
                </div>
            </div>
        </aside>

        <main class="chat-area">
             <div class="chat-header-main">
                <button class="menu-toggle" id="menuToggle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg>
                </button>
                <h1 class="chat-title">Lunar A.I+</h1>
            </div>
            <div class="chat-content" id="chatContent">
                <div class="welcome-screen" id="welcomeScreen">
                    <div class="welcome-text">
                        <h1 id="welcomeUserTitle">Good day!</h1>
                        <h1>How may I assist you today?</h1>
                    </div>
                    <div class="suggestion-cards">
                        <div class="card-column"><div class="card" data-prompt="Learn how to use chatbot for your needs"><h3>Explore</h3><p>Learn how to use chatbot for your needs</p></div><div class="card" data-prompt="How much capable chatbot to full-fill your needs"><h3>Capabilities</h3><p>How much capable chatbot to full-fill your needs</p></div><div class="card" data-prompt="Limitation of this chatbot"><h3>Limitation</h3><p>Limitation of this chatbot</p></div></div>
                        <div class="card-column"><div class="card" data-prompt="Explain Quantum computing in simple terms"><h3>"Explain"</h3><p>Quantum computing in simple terms</p></div><div class="card" data-prompt="Remember user's previous messages"><h3>"Remember"</h3><p>Remember user's previous messages</p></div><div class="card" data-prompt="This may occasionally generate incorrect information"><h3>"May"</h3><p>Occasionally generate incorrect information</p></div></div>
                        <div class="card-column"><div class="card" data-prompt="How to make a search engine platform like google"><h3>"How to"</h3><p>Make a search engine platform like google</p></div><div class="card" data-prompt="Allows user to provide follow-up corrections"><h3>"Allows"</h3><p>User to provide follow-up corrections</p></div><div class="card" data-prompt="Limited knowledge of world and events after 2021"><h3>"Limited"</h3><p>Knowledge of world and events after 2021</p></div></div>
                    </div>
                </div>
                <div class="chat-messages" id="chatMessages"></div>
            </div>

            <div class="chat-input-area">
                <div id="imagePreviewContainer">
                    <img src="" alt="Image Preview" id="previewThumbnail">
                    <button id="removePreviewBtn" title="Remove Image">&times;</button>
                </div>

                <div class="chat-input-wrapper">
                    <input type="file" id="fileInput" accept="image/*">
                    <button id="attachFileBtn" title="Attach File">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z"/></svg>
                    </button>
                    <button id="voiceInputBtn" title="Voice Input">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5zM8 8a3 3 0 0 0 3-3V3a3 3 0 1 0-6 0v2a3 3 0 0 0 3 3z"/></svg>
                    </button>
                    <input type="text" id="messageInput" placeholder="Attach an image and/or type a prompt...">
                    <button id="sendButton">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11z"/></svg>
                    </button>
                </div>
                <div class="footer">©Created by Liuzz & Ark</div>
            </div>
        </main>
    </div>

    <div id="settingsModal" class="modal-overlay">
        <div class="modal-content">
            <h2>Settings</h2>
            
            <div class="setting-item">
                <div class="setting-label">
                    <h3>User Name</h3>
                    <p class="setting-description">This name will be displayed on your profile.</p>
                </div>
                <div class="setting-control">
                    <input type="text" id="userNameSetting">
                </div>
            </div>

            <div class="setting-item">
                <div class="setting-label">
                    <h3>AI Model</h3>
                    <p class="setting-description">Choose the AI engine for your conversations.</p>
                </div>
                <div class="setting-control">
                    <select id="modelSetting">
                        <option value="gemini-2.5-pro">Lunar 2.5 Pro</option>
                        <option value="gemini-2.5-pro-preview-03-25">Lunar 2.5 pro preview (03-25)</option>
                        <option value="gemini-2.5-pro-preview-05-06">Lunar 2.5 pro preview (05-06)</option>
                        <option value="gemini-2.5-pro-preview-06-05">Lunar 2.5 pro preview (06-05)</option>
                        <option value="gemini-2.5-flash">Lunar 2.5 Flash</option>
                        <option value="gemini-2.5-flash-preview-05-20">Lunar 2.5 flash preview (05-20)</option>
                        <option value="gemini-2.5-flash-lite">Lunar 2.5 Flash Lite</option>
                        <option value="gemini-2.5-flash-lite-preview-06-17">Lunar 2.5 flash lite preview (06-17)</option>
                        <option value="gemini-2.0-pro-exp">Lunar 2.0 pro (experimental)</option>
                        <option value="gemini-2.0-pro-exp-02-05">Lunar 2.0 pro (experimental 02-05)</option>
                        <option value="gemini-2.0-flash-thinking-exp">Lunar 2.0 flash deepthink</option>
                        <option value="gemini-2.0-flash-thinking-exp-01-21">Lunar 2.0 flash deepthink (exp 01-21)</option>
                        <option value="gemini-2.0-flash-thinking-exp-1219">Lunar 2.0 flash deepthink (exp 1219)</option>
                        <option value="gemini-2.0-flash">Lunar 2.0 Flash</option>
                        <option value="gemini-2.0-flash-001">Lunar 2.0 flash (001)</option>
                        <option value="gemini-2.0-flash-lite">Lunar 2.0 Flash Lite</option>
                        <option value="gemini-2.0-flash-lite-001">Lunar 2.0 flash lite (001)</option>
                        <option value="gemini-2.0-flash-lite-preview">Lunar 2.0 flash lite preview</option>
                        <ootion value="gemini-2.0-flash-lite-preview-02-05">Lunar 2.0 flash lite preview (02-05)</option>
                        <option value="gemini-2.0-flash-exp">Lunar 2.0 (experimental)</option>
                        <option value="learnlm-2.0-flash-experimental">LearnLM 2.0 Flash (Exp)</option>
                        <option value="gemini-1.5-flash-8b-latest">Lunar 1.5 flash (8B latest)</option>
                        <option value="gemini-1.5-flash-8b-001">Lunar 1.5 flash (8B 001)</option>
                        <option value="gemini-1.5-flash-8b">Lunar 1.5 flash (8B)</option>
                        <option value="gemini-1.5-pro-latest">Lunar 1.5 pro (latest)</option>
                        <option value="gemini-1.5-pro-002">Lunar 1.5 pro (002)</option>
                        <option value="gemini-1.5-pro">Lunar 1.5 pro</option>
                        <option value="gemini-1.5-flash-latest">Lunar 1.5 flash (latest)</option>
                        <option value="gemini-1.5-flash-002">Lunar 1.5 flash (002)</option>
                        <option value="gemini-1.5-flash">Lunar 1.5 flash</option>
                        <option value="embedding-gecko-001">Lunar Gecko 1</option>
                        <option value="gemini-exp-1206">Lunar (experimental 1206)</option>
                        <option value="gemma-3-27b-it">Lunar 3 (27B) Instruct</option>
                        <option value="gemma-3-12b-it">Lunar 3 (12B) Instruct</option>
                        <option value="gemma-3-4b-it">Lunar 3 (4B) Instruct</option>
                        <option value="gemma-3n-e4b-it">Lunar 3N (E4B) Instruct</option>
                        <option value="gemma-3n-e2b-it">Lunar 3N (E2B) Instruct</option>
                        <option value="gemma-3-1b-it">Lunar 3 (1B) Instruct</option>
                    </select>
                </div>
            </div>

            <div class="setting-item">
                <div class="setting-label">
                    <h3>Chat Mode</h3>
                    <p class="setting-description">Enable tools for enhanced capabilities.</p>
                </div>
                <div class="setting-control">
                    <div class="mode-selector">
                        <input type="radio" id="modeStandard" name="chatMode" value="standard" checked>
                        <label for="modeStandard">Standard</label>

                        <input type="radio" id="modeThinking" name="chatMode" value="thinking">
                        <label for="modeThinking">Thinking</label>

                        <input type="radio" id="modeSearch" name="chatMode" value="search">
                        <label for="modeSearch">Search</label>
                        
                        <input type="radio" id="modeImage" name="chatMode" value="image">
                        <label for="modeImage">Image Gen</label>
                    </div>
                </div>
            </div>

            <div class="setting-item">
                <div class="setting-label">
                    <h3>Theme</h3>
                    <p class="setting-description">Switch between light and dark mode.</p>
                </div>
                <div class="setting-control">
                    <div class="theme-switcher">
                        <span>Light</span>
                        <input type="checkbox" id="themeToggle" class="toggle-switch">
                        <label for="themeToggle"></label>
                        <span>Dark</span>
                    </div>
                </div>
            </div>

            <button id="saveSettingsBtn" class="main-button">Save and Close</button>
        </div>
    </div>

    <!-- [INI DITAMBAHKAN] JavaScript untuk library highlight.js -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
`;

const cssContent = `
/* CSS Reset & Basic Styles */
:root {
    --bg-color-light: #ffffff;
    --text-color-light: #1a1a1a;
    --sidebar-bg-light: #ffffff;
    --accent-color-light: #545BFF;
    --border-color-light: #e0e0e0;
    --input-bg-light: #f0f2f5;
    --button-text-light: #ffffff;
    --secondary-text-light: #888;
    --card-bg-light: #F7F7F8;
    --user-message-bg-light: #F0F2F5;
    --ai-message-bg-light: #ffffff;
    --ease-out-cubic: cubic-bezier(0.215, 0.610, 0.355, 1); /* Animasi Halus */

    --bg-color-dark: #121212;
    --text-color-dark: #f0f0f0;
    --sidebar-bg-dark: #1E1E1E;
    --accent-color-dark: #6C6CFF;
    --border-color-dark: #3a3a3a;
    --input-bg-dark: #2c2c2c;
    --button-text-dark: #ffffff;
    --secondary-text-dark: #aaa;
    --card-bg-dark: #2c2c2c;
    --user-message-bg-dark: #2c2c2c;
    --ai-message-bg-dark: #1E1E1E;

    --bg-color: var(--bg-color-light);
    --text-color: var(--text-color-light);
    --sidebar-bg: var(--sidebar-bg-light);
    --accent-color: var(--accent-color-light);
    --border-color: var(--border-color-light);
    --input-bg: var(--input-bg-light);
    --button-text: var(--button-text-light);
    --secondary-text: var(--secondary-text-light);
    --card-bg: var(--card-bg-light);
    --user-message-bg: var(--user-message-bg-light);
    --ai-message-bg: var(--ai-message-bg-light);
}

html.dark-theme {
    --bg-color: var(--bg-color-dark);
    --text-color: var(--text-color-dark);
    --sidebar-bg: var(--sidebar-bg-dark);
    --accent-color: var(--accent-color-dark);
    --border-color: var(--border-color-dark);
    --input-bg: var(--input-bg-dark);
    --button-text: var(--button-text-dark);
    --secondary-text: var(--secondary-text-dark);
    --card-bg: var(--card-bg-dark);
    --user-message-bg: var(--user-message-bg-dark);
    --ai-message-bg: var(--ai-message-bg-dark);
}

* { box-sizing: border-box; }
html, body { height: 100%; margin: 0; padding: 0; overflow: hidden; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: var(--bg-color); color: var(--text-color); display: flex; transition: background-color 0.3s, color 0.3s; }

body.state-auth .app-container { display: none; }
body.state-app .auth-container { display: none; }

/* --- Login/Sign Up Page --- */
.auth-container { display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100%; height: 100%; padding: env(safe-area-inset-top, 1rem) 1rem env(safe-area-inset-bottom, 1rem) 1rem; }
.auth-box { width: 100%; max-width: 420px; text-align: center; }
.auth-box h1 { font-size: 2.5rem; font-weight: 600; margin-bottom: 0.5rem; text-align: left; }
.auth-box p { color: var(--secondary-text); margin-bottom: 2rem; text-align: left;}
.auth-box form { text-align: left; }
.auth-box .input-group { margin-bottom: 1.5rem; }
.auth-box label { display: block; margin-bottom: 0.5rem; font-weight: 500; }
.auth-box input { width: 100%; padding: 0.9rem 1rem; border-radius: 8px; border: 1px solid var(--border-color); background-color: var(--input-bg); color: var(--text-color); font-size: 1rem; }
.main-button { width: 100%; padding: 1rem; border: none; background-color: var(--accent-color); color: var(--button-text); border-radius: 8px; font-size: 1rem; font-weight: 600; cursor: pointer; transition: opacity 0.2s; }
.auth-switch { margin-top: 1.5rem; text-align: left; }
.auth-switch a { color: var(--accent-color); text-decoration: none; font-weight: 600; }
.social-login-divider { margin: 2rem 0; text-align: center; color: var(--secondary-text); display: flex; align-items: center; gap: 15px; }
.social-login-divider::before, .social-login-divider::after { content: ''; flex-grow: 1; height: 1px; background: var(--border-color); }
.social-logins { display: flex; flex-direction: column; gap: 1rem; }
.social-button { width: 100%; padding: 0.9rem; border-radius: 8px; border: 1px solid var(--border-color); background-color: var(--input-bg); color: var(--text-color); font-size: 1rem; cursor: pointer; display: flex; justify-content: center; align-items: center; gap: 10px; font-weight: 500; }
.social-button img { width: 20px; height: 20px; }
.social-button .apple-logo { filter: invert(var(--is-dark, 0)); }
html.dark-theme .social-button .apple-logo { --is-dark: 1; }

/* --- Main App --- */
.app-container { display: flex; width: 100%; height: 100%; position: relative; }

/* --- Sidebar --- */
.sidebar { width: 280px; background-color: var(--sidebar-bg); padding: 1.5rem; display: flex; flex-direction: column; border-right: 1px solid var(--border-color); transition: transform 0.4s var(--ease-out-cubic); flex-shrink: 0; padding-top: calc(env(safe-area-inset-top, 0px) + 1.5rem); padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 1.5rem); }
.sidebar-header h1 { font-size: 1.5rem; font-weight: 600; margin: 0 0 1rem 0; letter-spacing: -0.5px; }
.new-chat-btn { width: 100%; padding: 0.75rem; border: none; background-color: var(--accent-color); color: var(--button-text); border-radius: 8px; cursor: pointer; text-align: left; font-size: 0.9rem; font-weight: 500; display: flex; align-items: center; gap: 10px; margin-top: 1.5rem; margin-bottom: 1.5rem; }
.conversations-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; color: var(--secondary-text); font-size: 0.9rem; }
.conversations-header a { color: var(--secondary-text); text-decoration: none; cursor: pointer; }
.conversations { flex-grow: 1; overflow-y: auto; }
.conversation-item { padding: 0.75rem; border-radius: 5px; margin-bottom: 0.5rem; cursor: pointer; color: var(--text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; transition: background-color 0.2s, color 0.2s; }
.conversation-item:hover { background-color: var(--card-bg); }
.conversation-item.active, .conversation-item.active:hover { background-color: var(--accent-color); color: var(--button-text); }
.sidebar-footer { border-top: 1px solid var(--border-color); padding-top: 1rem; }
.user-profile, .settings-btn { display: flex; align-items: center; gap: 10px; padding: 0.75rem; border-radius: 5px; cursor: pointer; color: var(--text-color); }
.user-profile:hover, .settings-btn:hover { background-color: var(--card-bg); }
.settings-icon { color: var(--text-color); }
.user-avatar { width: 32px; height: 32px; border-radius: 50%; background-color: #ccc; flex-shrink: 0; }

/* --- Chat Area --- */
.chat-area { flex-grow: 1; display: flex; flex-direction: column; position: relative; overflow: hidden; transition: transform 0.4s var(--ease-out-cubic), filter 0.4s var(--ease-out-cubic); }
.chat-header-main { display: flex; align-items: center; padding: 1rem 1.5rem; border-bottom: 1px solid var(--border-color); padding-top: calc(env(safe-area-inset-top, 0px) + 1rem); }
.menu-toggle { background: none; border: none; cursor: pointer; color: var(--text-color); z-index: 1001; padding: 0.5rem; margin-left: -0.5rem; }
.chat-title { flex-grow: 1; text-align: center; font-size: 1.25rem; font-weight: 600; margin: 0; transform: translateX(-12px); }
.chat-content { flex-grow: 1; padding: 1.5rem; overflow-y: auto; display: flex; flex-direction: column; }
.welcome-screen { margin: auto; text-align: center; max-width: 900px; width: 100%; }
.welcome-text { margin-bottom: 2rem; }
.welcome-text h1 { font-size: 2.5rem; font-weight: 500; margin: 0.2rem 0; }
.suggestion-cards { display: flex; gap: 1rem; justify-content: center; }
.card-column { display: flex; flex-direction: column; gap: 1rem; flex: 1; }
.card { background-color: var(--card-bg); padding: 1rem; border-radius: 12px; text-align: left; cursor: pointer; transition: transform 0.2s, box-shadow 0.2s; border: 1px solid var(--border-color); }
.card:hover { transform: translateY(-5px); box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
.card h3 { margin: 0 0 0.5rem 0; font-size: 1rem; }
.card p { margin: 0; color: var(--secondary-text); font-size: 0.9rem; }
.chat-messages { width: 100%; max-width: 800px; margin: 0 auto; display: flex; flex-direction: column; gap: 1.5rem; padding-bottom: 1rem; }
.message-wrapper { background-color: var(--ai-message-bg); border: 1px solid var(--border-color); padding: 1rem; border-radius: 12px; }
.message.user .message-wrapper { background-color: var(--user-message-bg); }
.message.ai.thinking .message-wrapper { animation: pulse 2s infinite ease-in-out; }
.message.ai.thinking .message-content { display: flex; justify-content: space-between; align-items: center; }
.thought-summary { font-size: 0.85em; color: var(--secondary-text); border-top: 1px dashed var(--border-color); padding-top: 8px; margin-top: 8px; opacity: 0.9; line-height: 1.4; }
.thought-summary strong { color: var(--text-color); }

/* --- [START] KODE YANG DIPERBAIKI --- */
.code-block {
    background-color: #282c34;
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem 0;
    overflow-x: auto;
    position: relative;
}
.code-block pre, .code-block code {
    font-family: 'Courier New', Courier, monospace;
    color: #abb2bf;
    background: none;
    margin: 0;
    padding: 0;
    white-space: pre-wrap;
    word-break: break-all;
}
/* --- [END] KODE YANG DIPERBAIKI --- */

.copy-btn { position: absolute; top: 8px; right: 8px; background: #4f5666; color: white; border: none; border-radius: 5px; padding: 4px 8px; cursor: pointer; opacity: 0; transition: opacity 0.2s; font-size: 0.8rem; }
.message:hover .copy-btn, .code-block:hover .copy-btn { opacity: 1; }

.chat-input-area { padding: 1rem 1.5rem; border-top: 1px solid var(--border-color); flex-shrink: 0; background-color: var(--bg-color); padding-bottom: calc(env(safe-area-inset-bottom, 0px) + 1rem); position: relative; }
.chat-input-wrapper { max-width: 800px; margin: 0 auto; position: relative; display: flex; align-items: center; background-color: var(--input-bg); border: 1px solid var(--border-color); border-radius: 12px; padding: 0.5rem; }
#fileInput { display: none; }
#attachFileBtn, #voiceInputBtn { background: none; border: none; padding: 0.5rem; cursor: pointer; color: var(--secondary-text); }
#attachFileBtn:hover, #voiceInputBtn:hover { color: var(--text-color); }
#messageInput { flex-grow: 1; border: none; background: transparent; padding: 0.5rem; font-size: 1rem; color: var(--text-color); outline: none; margin: 0 0.5rem; }
#sendButton { background-color: var(--accent-color); border-radius: 8px; width: 38px; height: 38px; color: var(--button-text); display: flex; justify-content: center; align-items: center; border: none; cursor: pointer; flex-shrink: 0; }
.footer { text-align: center; font-size: 0.75rem; color: var(--secondary-text); padding-top: 1rem; }

/* Modal Styles */
.modal-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0,0,0,0.6); display: flex; justify-content: center; align-items: center; z-index: 2000; opacity: 0; pointer-events: none; transition: opacity 0.3s ease; }
.modal-overlay.visible { opacity: 1; pointer-events: auto; }
.modal-content { background-color: var(--sidebar-bg); padding: 2rem; border-radius: 12px; width: 90%; max-width: 500px; transform: scale(0.95); transition: transform 0.4s var(--ease-out-cubic); }
.modal-overlay.visible .modal-content { transform: scale(1); }

/* Sidebar Overlay */
.sidebar-overlay { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 999; opacity: 0; pointer-events: none; transition: opacity 0.4s ease; }

/* --- Responsive Styles --- */
@media (max-width: 768px) {
    .sidebar { position: absolute; height: 100%; transform: translateX(-100%); box-shadow: 5px 0 15px rgba(0,0,0,0.1); z-index: 1000; }
    .suggestion-cards { flex-direction: column; }
    .chat-title { transform: translateX(0); text-align: left; margin-left: 1rem; }
    body.sidebar-is-open .sidebar { transform: translateX(0); }
    body.sidebar-is-open .sidebar-overlay { opacity: 1; pointer-events: auto; }
    body.sidebar-is-open .chat-area { transform: translateX(80px) scale(0.95); filter: blur(2px) brightness(0.7); border-radius: 10px; overflow: hidden; }
}

/* --- Gaya Modal Settings --- */
.modal-content h2 { margin-top: 0; margin-bottom: 2rem; text-align: center; font-weight: 600; }
.setting-item { display: flex; justify-content: space-between; align-items: center; padding: 1rem 0; border-bottom: 1px solid var(--border-color); transition: opacity 0.3s; }
.setting-item:last-of-type { border-bottom: none; }
.setting-item.disabled { opacity: 0.5; pointer-events: none; }
.setting-label h3 { margin: 0; font-size: 1rem; font-weight: 500; }
.setting-description { margin: 0.25rem 0 0; font-size: 0.85rem; color: var(--secondary-text); }
.setting-control input[type="text"], .setting-control select { width: 200px; padding: 0.5rem 0.75rem; border-radius: 6px; border: 1px solid var(--border-color); background-color: var(--input-bg); color: var(--text-color); font-size: 0.9rem; }
.setting-control .theme-switcher { display: flex; align-items: center; }
#saveSettingsBtn { margin-top: 2rem; }
.mode-selector { display: flex; background-color: var(--input-bg); border-radius: 8px; border: 1px solid var(--border-color); padding: 3px; }
.mode-selector input[type="radio"] { display: none; }
.mode-selector label { flex: 1; text-align: center; padding: 0.4rem 0.5rem; font-size: 0.8rem; font-weight: 500; border-radius: 6px; cursor: pointer; transition: background-color 0.2s, color 0.2s; user-select: none; }
.mode-selector input[type="radio"]:checked + label { background-color: var(--accent-color); color: var(--button-text); }

/* --- Animasi & Timer --- */
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes fadeInSlideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
.message { position: relative; animation: fadeInSlideUp 0.4s var(--ease-out-cubic) forwards; }
@keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.02); } 100% { transform: scale(1); } }
@keyframes dot-bounce { 0%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-5px); } }
.typing-indicator span { animation-duration: 1.4s; animation-iteration-count: infinite; animation-name: dot-bounce; animation-timing-function: ease-in-out; background-color: var(--text-color); border-radius: 50%; display: inline-block; height: 6px; margin: 0 1px; width: 6px; }
.typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
.typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
.thinking-label { display: flex; align-items: center; gap: 8px; }
.time-indicator { font-size: 0.75em; color: var(--secondary-text); text-align: right; margin-top: 0.75rem; opacity: 0.8; }
.time-indicator.live { margin: 0; animation: none; }
.time-indicator:not(.live) { animation: fadeIn 0.5s ease forwards; }

/* --- Gaya Image Generator --- */
@keyframes shimmer { 0% { background-position: -400px 0; } 100% { background-position: 400px 0; } }
.image-container { position: relative; border-radius: 8px; overflow: hidden; min-height: 200px; background-color: var(--input-bg); display: flex; justify-content: center; align-items: center; color: var(--secondary-text); }
.image-container.loading { background: linear-gradient(to right, var(--input-bg) 8%, var(--card-bg) 18%, var(--input-bg) 33%); background-size: 800px 104px; animation: shimmer 1.5s infinite linear; }
.image-container span { font-style: italic; }
.generated-image { max-width: 100%; display: block; border-radius: 8px; }
.download-btn { position: absolute; bottom: 10px; right: 10px; background-color: rgba(0, 0, 0, 0.6); color: white; border: none; border-radius: 50%; width: 40px; height: 40px; display: flex; justify-content: center; align-items: center; cursor: pointer; opacity: 1; transform: scale(1); transition: background-color 0.2s; }
.download-btn:hover { background-color: rgba(0, 0, 0, 0.8); }
.download-btn svg { width: 20px; height: 20px; }

/* --- Gaya Pratinjau Gambar Input (Multi-Image) --- */
#imagePreviewContainer {
    position: absolute;
    bottom: calc(100% + 8px); /* Posisi di atas area input */
    left: 1.5rem;
    right: 1.5rem; /* Agar tidak terlalu lebar di layar besar */
    max-width: 800px;
    margin: 0 auto;
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 8px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    display: flex; /* Menggunakan flexbox */
    align-items: center;
    gap: 10px;
    z-index: 10;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
    pointer-events: none;
    overflow-x: auto; /* Memungkinkan scroll horizontal */
}

#imagePreviewContainer.visible {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
}

.preview-item {
    position: relative;
    flex-shrink: 0; /* Mencegah gambar menyusut */
}

.preview-thumbnail {
    width: 52px;
    height: 52px;
    border-radius: 6px;
    object-fit: cover;
    display: block;
}

.remove-preview-btn {
    position: absolute;
    top: -6px;
    right: -6px;
    background: var(--bg-color);
    border: 1px solid var(--border-color);
    color: var(--secondary-text);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 14px;
    line-height: 1;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.remove-preview-btn:hover {
    background-color: var(--border-color);
    color: var(--text-color);
}
`;

const jsContent = `
document.addEventListener('DOMContentLoaded', () => {
    // --- Elements ---
    const authContainer = document.getElementById('authContainer');
    const appContainer = document.getElementById('appContainer');
    const loginBox = document.getElementById('loginBox');
    const signUpBox = document.getElementById('signUpBox');
    const showSignUp = document.getElementById('showSignUp');
    const showLogin = document.getElementById('showLogin');
    const loginForm = document.getElementById('loginForm');
    const signUpForm = document.getElementById('signUpForm');
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const messageInput = document.getElementById('messageInput');
    const sendButton = document.getElementById('sendButton');
    const chatContent = document.getElementById('chatContent');
    const chatMessages = document.getElementById('chatMessages');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const newChatBtn = document.getElementById('newChatBtn');
    const conversationsList = document.getElementById('conversationsList');
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsModal = document.getElementById('settingsModal');
    const saveSettingsBtn = document.getElementById('saveSettingsBtn');
    const userNameSetting = document.getElementById('userNameSetting');
    const modelSetting = document.getElementById('modelSetting');
    const themeToggle = document.getElementById('themeToggle');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const voiceInputBtn = document.getElementById('voiceInputBtn');
    const attachFileBtn = document.getElementById('attachFileBtn');
    const fileInput = document.getElementById('fileInput');
    const clearAllBtn = document.getElementById('clearAllBtn');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const welcomeUserTitle = document.getElementById('welcomeUserTitle');
    const chatModeRadios = document.querySelectorAll('input[name="chatMode"]');
    const imagePreviewContainer = document.getElementById('imagePreviewContainer');

    // --- State & System Instruction ---
    let currentUser = null;
    let conversations = {};
    let currentChatId = null;
    let currentChatMode = 'standard';
    let currentSystemInstruction = null;
    let stagedImageDataUrls = [];

    let apiKeys = [
        "AIzaSyAP7YOamUiSwxtBxIjfIhVDf2Jyzfaj1Z0",
        "AIzaSyDGpvf2IY5n4tcitnWUyBFePjvCQQMAnNs", "AIzaSyDH0gUYY0YxVzXPn3rPFPARlhSORzq7zyM",
        "AIzaSyDoX3XatC5x-YN5TtyHBF5P3LEKLm4L3SU", "AIzaSyCJjTwVm-3x42R5lkcRErMxtEmG3_DcejA",
        "AIzaSyAiJR0SdzY7wpvYIr4ZGdPAkIYqHKrmq70", "AIzaSyDBQ_aET7uzAkz28hYos8K99B8bX3OlbkE",
        "AIzaSyCAgajm99EejnJiUlVC0y-RhYnXK3cxrjg", "AIzaSyA9hf7FrWlsO9tbueuj_aK-trcqwucyon8",
        "AIzaSyCDgQENhaOiLrtkhZVe0ToG4qK0QFAyjh0"
    ];
    let currentApiKeyIndex = 0;

    const SYSTEM_INSTRUCTION_TEMPLATE = "Kamu adalah Lunar A.I, asisten yang membantu dan ramah. Kamu diciptakan oleh Syawaliuz Octavian (Liuzz) & Satria Arkanata (Ark). Kamu berpengetahuan luas, kreatif, dan selalu sopan. Kamu sedang berbicara dengan pengguna bernama {userName}. Ingat nama ini dan gunakan untuk membuat percapan terasa personal jika relevan. Jangan sebut dirimu gemini atau lainnya, anggap dirimu tidak berhubungan dengan google dan sejenisnya.";
    const getSystemInstruction = (userName) => ({ parts: [{ text: SYSTEM_INSTRUCTION_TEMPLATE.replace('{userName}', userName) }] });
    
    // --- Sidebar, Auth, Chat Management ---
    const checkLoginStatus = () => { const loggedInUser = localStorage.getItem('lunar_currentUser'); if (loggedInUser) { currentUser = JSON.parse(loggedInUser); const firstName = currentUser.name.split(' ')[0]; welcomeUserTitle.textContent = \`Good day, \${firstName}!\`; currentSystemInstruction = getSystemInstruction(firstName); showApp(); loadSettings(); loadConversations(); } else { showAuth(); } };
    let isSidebarOpen = false, isSidebarAnimating = false; const animationDuration = 300; const openSidebar = () => { if (isSidebarOpen || isSidebarAnimating) return; isSidebarAnimating = true; document.body.classList.add('sidebar-is-open'); isSidebarOpen = true; setTimeout(() => { isSidebarAnimating = false; }, animationDuration); }; const closeSidebar = () => { if (!isSidebarOpen || isSidebarAnimating) return; isSidebarAnimating = true; document.body.classList.remove('sidebar-is-open'); isSidebarOpen = false; setTimeout(() => { isSidebarAnimating = false; }, animationDuration); }; const toggleSidebar = () => { isSidebarOpen ? closeSidebar() : openSidebar(); }; const showApp = () => { document.body.classList.remove('state-auth'); document.body.classList.add('state-app'); }; const showAuth = () => { document.body.classList.remove('state-app'); document.body.classList.add('state-auth'); }; showSignUp.addEventListener('click', (e) => { e.preventDefault(); loginBox.style.display = 'none'; signUpBox.style.display = 'block'; }); showLogin.addEventListener('click', (e) => { e.preventDefault(); signUpBox.style.display = 'none'; loginBox.style.display = 'block'; }); signUpForm.addEventListener('submit', (e) => { e.preventDefault(); const name = document.getElementById('signUpName').value, email = document.getElementById('signUpEmail').value, password = document.getElementById('signUpPassword').value; const users = JSON.parse(localStorage.getItem('lunar_users') || '{}'); if (users[email]) { alert('User already exists!'); return; } users[email] = { name, password }; localStorage.setItem('lunar_users', JSON.stringify(users)); currentUser = { name, email }; localStorage.setItem('lunar_currentUser', JSON.stringify(currentUser)); checkLoginStatus(); }); loginForm.addEventListener('submit', (e) => { e.preventDefault(); const email = document.getElementById('loginEmail').value, password = document.getElementById('loginPassword').value; const users = JSON.parse(localStorage.getItem('lunar_users') || '{}'); const user = users[email]; if (user && user.password === password) { currentUser = { name: user.name, email }; localStorage.setItem('lunar_currentUser', JSON.stringify(currentUser)); checkLoginStatus(); } else { alert('Invalid email or password.'); } }); const setActiveConversation = (id) => { document.querySelectorAll('.conversation-item').forEach(item => item.classList.remove('active')); if (id) { const activeItem = document.querySelector(\`.conversation-item[data-id='\${id}']\`); if (activeItem) activeItem.classList.add('active'); } }; newChatBtn.addEventListener('click', () => { currentChatId = null; chatMessages.innerHTML = ''; welcomeScreen.style.display = 'flex'; messageInput.disabled = false; sendButton.disabled = false; setActiveConversation(null); closeSidebar(); clearImagePreview(); }); clearAllBtn.addEventListener('click', () => { if (confirm('Are you sure you want to clear all conversations? This action cannot be undone.')) { conversations = {}; saveConversations(); renderConversationsList(); newChatBtn.click(); } });
    const loadChat = (id) => { currentChatId = id; chatMessages.innerHTML = ''; welcomeScreen.style.display = 'none'; const conversation = conversations[id]; conversation.forEach(msg => createMessageFromHistory(msg)); setActiveConversation(id); closeSidebar(); };
    
    // --- Message UI & Animations ---
    const formatDuration = (seconds) => { if (seconds < 60) return \`\${seconds.toFixed(1)}s\`; const minutes = Math.floor(seconds / 60); const remainingSeconds = Math.round(seconds % 60); return \`\${minutes}m \${remainingSeconds}s\`; }; const addCopyToClipboard = (element, text) => { if (!navigator.clipboard || !text) return; const copyBtn = document.createElement('button'); copyBtn.className = 'copy-btn'; copyBtn.textContent = 'Copy'; copyBtn.onclick = () => navigator.clipboard.writeText(text).then(() => { copyBtn.textContent = 'Copied!'; setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1500); }); element.appendChild(copyBtn); };
    const formatMessageContent = (container, text) => { if (typeof text !== 'string' || !text) { return; } const codeBlockRegex = /\\\`\\\`\\\`(\\w+)?\\n?([\\s\\S]*?)\\\`\\\`\\\`/g; let lastIndex = 0; let match; const processText = (txt) => txt.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\*\\*(.*?)\\*\\*/g, '<b>$1</b>').replace(/\\*(.*?)\\*/g, '<i>$1</i>').replace(/\\n/g, '<br>'); while ((match = codeBlockRegex.exec(text)) !== null) { if (match.index > lastIndex) { const p = document.createElement('p'); p.innerHTML = processText(text.substring(lastIndex, match.index)); container.appendChild(p); } const codeContent = match[2].trim(); const codeBlockDiv = document.createElement('div'); codeBlockDiv.className = 'code-block'; const pre = document.createElement('pre'); const code = document.createElement('code'); if (match[1]) { code.className = \`language-\${match[1]}\`; } code.textContent = codeContent; pre.appendChild(code); codeBlockDiv.appendChild(pre); addCopyToClipboard(codeBlockDiv, codeContent); container.appendChild(codeBlockDiv); hljs.highlightElement(code); } if (lastIndex < text.length) { const p = document.createElement('p'); p.innerHTML = processText(text.substring(lastIndex)); container.appendChild(p); } };
    const createMessageFromHistory = (msg) => { const textPart = msg.parts.find(p => p.text); const imageParts = msg.parts.filter(p => p.image_url || p.inline_data); let messageElement; if (msg.role === 'user') { const imageUrls = imageParts.map(p => \`data:\${p.inline_data.mime_type};base64,\${p.inline_data.data}\`); messageElement = createUserMessageElement(textPart?.text, imageUrls); } else { const imagePart = imageParts[0]; messageElement = createModelMessageElement(textPart, imagePart); } chatMessages.appendChild(messageElement); chatContent.scrollTop = chatContent.scrollHeight; return messageElement; };
    const createUserMessageElement = (text, imageUrls = []) => { const messageDiv = document.createElement('div'); messageDiv.classList.add('message', 'user'); const messageWrapper = document.createElement('div'); messageWrapper.className = 'message-wrapper'; if (imageUrls.length > 0) { const imageContainer = document.createElement('div'); imageContainer.style.display = 'flex'; imageContainer.style.gap = '8px'; imageContainer.style.flexWrap = 'wrap'; imageUrls.forEach(url => { const img = document.createElement('img'); img.src = url; img.style.maxWidth = '100px'; img.style.maxHeight = '100px'; img.style.borderRadius = '8px'; img.style.objectFit = 'cover'; imageContainer.appendChild(img); }); messageWrapper.appendChild(imageContainer); if (text) imageContainer.style.marginBottom = '10px'; } if (text) { const messageContentDiv = document.createElement('div'); messageContentDiv.className = 'message-content'; formatMessageContent(messageContentDiv, text); messageWrapper.appendChild(messageContentDiv); } messageDiv.appendChild(messageWrapper); return messageDiv; };
    const createModelMessageElement = (textPart, imagePart) => { const messageDiv = document.createElement('div'); messageDiv.classList.add('message', 'ai'); const messageWrapper = document.createElement('div'); messageWrapper.className = 'message-wrapper'; messageDiv.appendChild(messageWrapper); if (textPart) { const messageContentDiv = document.createElement('div'); messageContentDiv.className = 'message-content'; formatMessageContent(messageContentDiv, textPart.text); messageWrapper.appendChild(messageContentDiv); addCopyToClipboard(messageDiv, textPart.text); } if (imagePart) { const imageContainer = document.createElement('div'); imageContainer.className = 'image-container'; if (textPart) imageContainer.style.marginTop = '1rem'; displayGeneratedImage(imageContainer, imagePart.image_url); messageWrapper.appendChild(imageContainer); } return messageDiv; };
    const createDynamicThinkingMessageElement = (mode, startTime) => { const thinkingPhrases = { thinking: ["Menganalisis permintaan...", "Mempertimbangkan berbagai sudut pandang...", "Menyusun kerangka jawaban...", "Merumuskan respons..."], search: ["Memahami kueri...", "Menggunakan Google Search...", "Menganalisis hasil pencarian...", "Merangkum informasi...", "Menyusun jawaban akhir..."], image: ["Memahami prompt Anda...", "Menyiapkan kanvas digital...", "Mengumpulkan inspirasi...", "Melukis mahakarya Anda..."] }; const phrases = thinkingPhrases[mode] || thinkingPhrases.thinking; let phraseIndex = 0; const messageDiv = document.createElement('div'); messageDiv.classList.add('message', 'ai'); const messageWrapper = document.createElement('div'); messageWrapper.className = 'message-wrapper'; const messageContentDiv = document.createElement('div'); messageContentDiv.className = 'message-content'; messageContentDiv.innerHTML = \`<div class="typing-indicator"><span></span><span></span><span></span></div> <span id="thinking-text">\${phrases[0]}</span> <span class="time-indicator live">0.0s</span>\`; messageWrapper.appendChild(messageContentDiv); messageDiv.appendChild(messageWrapper); chatMessages.appendChild(messageDiv); chatContent.scrollTop = chatContent.scrollHeight; const thinkingTextSpan = messageDiv.querySelector('#thinking-text'); const timerSpan = messageDiv.querySelector('.time-indicator.live'); const phraseIntervalId = setInterval(() => { phraseIndex = (phraseIndex + 1) % phrases.length; thinkingTextSpan.textContent = phrases[phraseIndex]; }, 2500); const timerIntervalId = setInterval(() => { const elapsed = (performance.now() - startTime) / 1000; timerSpan.textContent = \`\${elapsed.toFixed(1)}s\`; }, 100); return { element: messageDiv, stop: () => { clearInterval(phraseIntervalId); clearInterval(timerIntervalId); } }; };
    
    async function typeResponse(container, text) {
        const processText = (txt) => txt.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\\*\\*(.*?)\\*\\*/g, '<b>$1</b>').replace(/\\*(.*?)\\*/g, '<i>$1</i>').replace(/\\n/g, '<br>');

        const typeSegment = (element, segment) => {
            return new Promise(resolve => {
                let i = 0;
                const typingInterval = setInterval(() => {
                    if (i < segment.length) {
                        element.textContent += segment.charAt(i);
                        i++;
                        chatContent.scrollTop = chatContent.scrollHeight;
                    } else {
                        clearInterval(typingInterval);
                        resolve();
                    }
                }, 10); // Typing speed
            });
        };

        const codeBlockRegex = /\\\`\\\`\\\`(\\w*)\\n?([\\s\\S]*?)\\\`\\\`\\\`/g;
        let lastIndex = 0;
        let match;

        while ((match = codeBlockRegex.exec(text)) !== null) {
            if (match.index > lastIndex) {
                const textSegment = text.substring(lastIndex, match.index);
                const p = document.createElement('p');
                container.appendChild(p);
                await typeSegment(p, textSegment);
                p.innerHTML = processText(textSegment);
            }
            
            const language = match[1] || 'plaintext';
            const codeContent = match[2].trim();

            const codeBlockDiv = document.createElement('div');
            codeBlockDiv.className = 'code-block';
            const pre = document.createElement('pre');
            const code = document.createElement('code');
            code.className = \`language-\${language}\`;
            
            pre.appendChild(code);
            codeBlockDiv.appendChild(pre);
            container.appendChild(codeBlockDiv);
            
            await typeSegment(code, codeContent);
            
            hljs.highlightElement(code);
            addCopyToClipboard(codeBlockDiv, codeContent);

            lastIndex = codeBlockRegex.lastIndex;
        }

        if (lastIndex < text.length) {
            const remainingText = text.substring(lastIndex);
            const p = document.createElement('p');
            container.appendChild(p);
            await typeSegment(p, remainingText);
            p.innerHTML = processText(remainingText);
        }
    }

    const saveConversations = () => { try { localStorage.setItem(\`lunar_conversations_\${currentUser.email}\`, JSON.stringify(conversations)); } catch (e) { console.error("Failed to save conversations:", e); alert("Gagal menyimpan percakapan. Kemungkinan memori penuh."); } };
    const loadConversations = () => { conversations = JSON.parse(localStorage.getItem(\`lunar_conversations_\${currentUser.email}\`) || '{}'); renderConversationsList(); };
    const renderConversationsList = () => { conversationsList.innerHTML = ''; Object.keys(conversations).forEach(id => { const conversation = conversations[id]; const firstUserMessage = conversation.find(msg => msg.role === 'user'); if (firstUserMessage) { const item = document.createElement('div'); item.classList.add('conversation-item'); const firstTextPart = firstUserMessage.parts.find(p => p.text); item.textContent = (firstTextPart?.text || "Image Prompt").substring(0, 30) + '...'; item.dataset.id = id; item.onclick = () => loadChat(id); conversationsList.prepend(item); } }); setActiveConversation(currentChatId); };
    const extractBase64Data = (dataUrl) => { const parts = dataUrl.split(','); const mimeType = parts[0].match(/:(.*?);/)[1]; const data = parts[1]; return { mimeType, data }; };

    // --- MAIN SEND MESSAGE FLOW ---
    const sendMessage = async () => { const messageText = messageInput.value.trim(); if (!messageText && stagedImageDataUrls.length === 0) return; welcomeScreen.style.display = 'none'; let isNewChat = !currentChatId; if (isNewChat) { currentChatId = Date.now().toString(); conversations[currentChatId] = []; } const userMessageParts = []; if (messageText) userMessageParts.push({ text: messageText }); stagedImageDataUrls.forEach(dataUrl => { const { mimeType, data } = extractBase64Data(dataUrl); userMessageParts.push({ inline_data: { mime_type: mimeType, data: data } }); }); const userMsgData = { role: 'user', parts: userMessageParts }; conversations[currentChatId].push(userMsgData); createMessageFromHistory(userMsgData); if (isNewChat) renderConversationsList(); messageInput.value = ''; clearImagePreview(); messageInput.disabled = true; sendButton.disabled = true; try { if (currentChatMode === 'image') await handleImageMode(); else if (currentChatMode === 'search') await handleSearchMode(); else await handleStandardChat(); } catch (error) { console.error("Error during message handling:", error); createMessageFromHistory({ role: 'model', parts: [{ text: \`Maaf, terjadi kesalahan tak terduga: \${error.message}\` }] }); } finally { messageInput.disabled = false; sendButton.disabled = false; messageInput.focus(); saveConversations(); } };
    
    const addTimestamp = (element, startTime) => { if (element) { try { const duration = (performance.now() - startTime) / 1000; const timeIndicator = document.createElement('div'); timeIndicator.className = 'time-indicator'; timeIndicator.textContent = \`Dihasilkan dalam \${formatDuration(duration)}\`; element.querySelector('.message-wrapper').appendChild(timeIndicator); } catch (e) { console.error("Failed to add timestamp:", e); } } };

    // --- Chat Mode Handlers ---
    const handleStandardChat = async () => { const startTime = performance.now(); const thinkingAnimation = createDynamicThinkingMessageElement('thinking', startTime); let finalMessageElement; try { const result = await callGoogleAI(conversations[currentChatId], null, currentSystemInstruction); conversations[currentChatId].push({ role: 'model', parts: [{ text: result.responseText }] }); thinkingAnimation.stop(); thinkingAnimation.element.remove(); const messageDiv = document.createElement('div'); messageDiv.classList.add('message', 'ai'); const messageWrapper = document.createElement('div'); messageWrapper.className = 'message-wrapper'; const messageContentDiv = document.createElement('div'); messageContentDiv.className = 'message-content'; messageWrapper.appendChild(messageContentDiv); messageDiv.appendChild(messageWrapper); chatMessages.appendChild(messageDiv); finalMessageElement = messageDiv; await typeResponse(messageContentDiv, result.responseText); addCopyToClipboard(messageDiv, result.responseText); addTimestamp(finalMessageElement, startTime); } catch (error) { thinkingAnimation.stop(); thinkingAnimation.element.remove(); const errorParts = [{ text: error.message }]; conversations[currentChatId].push({ role: 'model', parts: errorParts }); finalMessageElement = createMessageFromHistory({ role: 'model', parts: errorParts }); addTimestamp(finalMessageElement, startTime); } };
    const handleSearchMode = async () => { const startTime = performance.now(); const thinkingAnimation = createDynamicThinkingMessageElement('search', startTime); let finalMessageElement; try { const searchTool = [{ "google_search": {} }]; const result = await callGoogleAI(conversations[currentChatId], searchTool, currentSystemInstruction); conversations[currentChatId].push({ role: 'model', parts: [{ text: result.responseText }] }); thinkingAnimation.stop(); thinkingAnimation.element.remove(); const messageDiv = document.createElement('div'); messageDiv.classList.add('message', 'ai'); const messageWrapper = document.createElement('div'); messageWrapper.className = 'message-wrapper'; const messageContentDiv = document.createElement('div'); messageContentDiv.className = 'message-content'; messageWrapper.appendChild(messageContentDiv); messageDiv.appendChild(messageWrapper); chatMessages.appendChild(messageDiv); finalMessageElement = messageDiv; await typeResponse(messageContentDiv, result.responseText); addCopyToClipboard(messageDiv, result.responseText); addTimestamp(finalMessageElement, startTime); } catch (error) { thinkingAnimation.stop(); thinkingAnimation.element.remove(); const errorParts = [{ text: error.message }]; conversations[currentChatId].push({ role: 'model', parts: errorParts }); finalMessageElement = createMessageFromHistory({ role: 'model', parts: errorParts }); addTimestamp(finalMessageElement, startTime); } };
    const handleImageMode = async () => { const startTime = performance.now(); const thinkingAnimation = createDynamicThinkingMessageElement('image', startTime); let finalMessageElement; try { const result = await generateImageWithGemini(conversations[currentChatId]); if (!result.textResponse && !result.imageUrl) throw new Error("API tidak menghasilkan teks ataupun gambar."); const modelParts = []; if (result.textResponse) modelParts.push({ text: result.textResponse }); if (result.imageUrl) modelParts.push({ image_url: result.imageUrl }); conversations[currentChatId].push({ role: 'model', parts: modelParts }); thinkingAnimation.stop(); thinkingAnimation.element.remove(); const messageDiv = document.createElement('div'); messageDiv.classList.add('message', 'ai'); const messageWrapper = document.createElement('div'); messageWrapper.className = 'message-wrapper'; messageDiv.appendChild(messageWrapper); chatMessages.appendChild(messageDiv); finalMessageElement = messageDiv; if (result.textResponse) { const messageContentDiv = document.createElement('div'); messageContentDiv.className = 'message-content'; messageWrapper.appendChild(messageContentDiv); await typeResponse(messageContentDiv, result.textResponse); addCopyToClipboard(messageDiv, result.textResponse); } if (result.imageUrl) { const imageContainer = document.createElement('div'); imageContainer.className = 'image-container'; if (result.textResponse) imageContainer.style.marginTop = '1rem'; displayGeneratedImage(imageContainer, result.imageUrl); messageWrapper.appendChild(imageContainer); } addTimestamp(finalMessageElement, startTime); } catch (error) { thinkingAnimation.stop(); thinkingAnimation.element.remove(); const errorParts = [{ text: error.message }]; conversations[currentChatId].push({ role: 'model', parts: errorParts }); finalMessageElement = createMessageFromHistory({ role: 'model', parts: errorParts }); addTimestamp(finalMessageElement, startTime); } };

    // --- API Calls & Helpers ---
    const callGoogleAI = async (history, tools = null, systemInstruction = null, retries = 0) => { if (retries >= apiKeys.length) throw new Error("Semua kunci API gagal. Kemungkinan model overload atau kunci tidak valid."); const apiKey = apiKeys[currentApiKeyIndex]; const model = localStorage.getItem('lunar_model') || 'gemini-2.5-flash'; const API_URL = \`https://generativelanguage.googleapis.com/v1beta/models/\${model}:generateContent?key=\${apiKey}\`; const cleanHistory = history.map(msg => ({ role: msg.role === 'user' ? 'user' : 'model', parts: msg.parts.filter(part => part.text || part.inline_data) })).filter(msg => msg.parts.length > 0); const requestBody = { "contents": cleanHistory }; if (systemInstruction) { requestBody.system_instruction = systemInstruction; } if (tools) { requestBody.tools = tools; } try { const response = await fetch(API_URL, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(requestBody) }); const responseData = await response.json(); if (!response.ok) { if (responseData.error && [400, 403, 429].includes(response.status)) { currentApiKeyIndex = (currentApiKeyIndex + 1) % apiKeys.length; return callGoogleAI(history, tools, systemInstruction, retries + 1); } throw new Error(responseData.error?.message || \`HTTP error! Status: \${response.status}\`); } const candidate = responseData.candidates?.[0]; if (!candidate) { throw new Error("Respons dari AI tidak valid (tidak ada kandidat)."); } if (candidate.finishReason && candidate.finishReason !== "STOP") { throw new Error(\`Maaf, respons saya diblokir oleh filter keamanan (Alasan: \${candidate.finishReason}). Coba prompt lain.\`); } if (!candidate.content || !candidate.content.parts) { throw new Error("Respons dari AI tidak valid (tidak ada konten)."); } const responseText = candidate.content.parts.map(part => part.text).filter(Boolean).join(""); if (!responseText) { if (candidate.content.parts.some(part => part.toolCall)) { return { responseText: "Menggunakan alat..." }; } throw new Error("Respons dari AI tidak berisi konten teks yang valid."); } return { responseText }; } catch (error) { console.error("Google AI Call Error:", error); if (retries < apiKeys.length - 1) { currentApiKeyIndex = (currentApiKeyIndex + 1) % apiKeys.length; return callGoogleAI(history, tools, systemInstruction, retries + 1); } throw error; } };
    const generateImageWithGemini = async (history, retries = 0) => { if (retries >= apiKeys.length) throw new Error("Semua kunci API gagal."); const apiKey = apiKeys[currentApiKeyIndex]; const modelId = "gemini-2.0-flash-preview-image-generation"; const apiUrl = \`https://generativelanguage.googleapis.com/v1beta/models/\${modelId}:generateContent?key=\${apiKey}\`; const lastUserMessage = history.filter(m => m.role === 'user').pop(); if (!lastUserMessage) throw new Error("Tidak ada prompt pengguna untuk generasi gambar."); const userTextPart = lastUserMessage.parts.find(p => p.text); const userImageParts = lastUserMessage.parts.filter(p => p.inline_data); if (!userTextPart && userImageParts.length === 0) { throw new Error("Prompt harus berisi teks atau gambar."); } const finalParts = []; const stylePrefix = "ini adalah system instruction: namamu adalah Lunar A.I+ dan ini adalah prompt dari user: "; const userText = userTextPart ? userTextPart.text : ''; finalParts.push({ "text": stylePrefix + userText }); userImageParts.forEach(imgPart => finalParts.push(imgPart)); const requestBody = { "contents": [{ "role": "user", "parts": finalParts }], "generationConfig": { "responseModalities": ["IMAGE", "TEXT"] } }; try { const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(requestBody) }); const responseData = await response.json(); if (!response.ok) { if (responseData.error && [400, 403, 429].includes(response.status)) { currentApiKeyIndex = (currentApiKeyIndex + 1) % apiKeys.length; return generateImageWithGemini(history, retries + 1); } throw new Error(responseData.error?.message || \`HTTP error! Status: \${response.status}\`); } const candidate = responseData.candidates?.[0]; if (candidate && candidate.finishReason && candidate.finishReason !== "STOP") { throw new Error(\`Maaf, respons gambar diblokir (Alasan: \${candidate.finishReason}).\`); } const parts = candidate?.content?.parts || []; const imagePart = parts.find(part => part.inlineData?.mimeType === "image/png"); const textPart = parts.find(part => part.text); const imageUrl = imagePart ? \`data:image/png;base64,\${imagePart.inlineData.data}\` : null; const textResponse = textPart ? textPart.text : null; return { imageUrl, textResponse }; } catch (error) { console.error("Gemini Image Gen Error:", error); throw error; } };
    const displayGeneratedImage = (container, imageUrl) => { container.classList.remove('loading'); container.textContent = ''; const img = document.createElement('img'); img.src = imageUrl; img.alt = "Generated by AI"; img.className = "generated-image"; img.onload = () => img.classList.add('loaded'); const downloadBtn = document.createElement('button'); downloadBtn.className = "download-btn"; downloadBtn.title = "Download Image"; downloadBtn.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>\`; downloadBtn.addEventListener('click', (e) => { e.stopPropagation(); downloadImage(imageUrl); }); container.appendChild(img); container.appendChild(downloadBtn); };
    const downloadImage = (imageUrl) => { try { if (window.AndroidInterface && typeof window.AndroidInterface.downloadImageFromBase64 === 'function') { const base64Data = imageUrl.split(',')[1]; const fileName = \`lunar-ai-image-\${Date.now()}.png\`; window.AndroidInterface.downloadImageFromBase64(base64Data, fileName); } else { throw new Error("Android interface not available."); } } catch (e) { console.error('Download failed:', e); alert('Gagal mengunduh gambar. Fitur ini hanya tersedia di aplikasi Android.'); } };
    const saveSettings = () => { const newName = userNameSetting.value; currentUser.name = newName; const users = JSON.parse(localStorage.getItem('lunar_users')); users[currentUser.email].name = newName; localStorage.setItem('lunar_users', JSON.stringify(users)); localStorage.setItem('lunar_currentUser', JSON.stringify(currentUser)); userNameDisplay.textContent = newName; currentSystemInstruction = getSystemInstruction(newName.split(' ')[0]); localStorage.setItem('lunar_model', modelSetting.value); currentChatMode = document.querySelector('input[name="chatMode"]:checked').value; localStorage.setItem('lunar_chatMode', currentChatMode); if (themeToggle.checked) { localStorage.setItem('lunar_theme', 'dark'); document.documentElement.classList.add('dark-theme'); } else { localStorage.setItem('lunar_theme', 'light'); document.documentElement.classList.remove('dark-theme'); } settingsModal.classList.remove('visible'); };
    const toggleModelSelectorState = () => { const selectedMode = document.querySelector('input[name="chatMode"]:checked').value; const modelSettingItem = modelSetting.closest('.setting-item'); if (selectedMode === 'image') { modelSetting.disabled = true; modelSettingItem.classList.add('disabled'); attachFileBtn.style.display = 'block'; } else { modelSetting.disabled = false; modelSettingItem.classList.remove('disabled'); attachFileBtn.style.display = 'block'; } };
    const loadSettings = () => { const name = currentUser.name; userNameDisplay.textContent = name; userNameSetting.value = name; const model = localStorage.getItem('lunar_model'); if (model) modelSetting.value = model; const chatMode = localStorage.getItem('lunar_chatMode') || 'standard'; currentChatMode = chatMode; document.querySelector(\`input[name="chatMode"][value="\${chatMode}"]\`).checked = true; const theme = localStorage.getItem('lunar_theme'); if (theme === 'dark') { document.documentElement.classList.add('dark-theme'); themeToggle.checked = true; } else { document.documentElement.classList.remove('dark-theme'); themeToggle.checked = false; } toggleModelSelectorState(); };
    const renderImagePreviews = () => { imagePreviewContainer.innerHTML = ''; stagedImageDataUrls.forEach((dataUrl, index) => { const item = document.createElement('div'); item.className = 'preview-item'; const img = document.createElement('img'); img.src = dataUrl; img.className = 'preview-thumbnail'; const btn = document.createElement('button'); btn.className = 'remove-preview-btn'; btn.innerHTML = '&times;'; btn.onclick = () => removeStagedImage(index); item.appendChild(img); item.appendChild(btn); imagePreviewContainer.appendChild(item); }); if (stagedImageDataUrls.length > 0) { imagePreviewContainer.classList.add('visible'); welcomeScreen.style.display = 'none'; } else { imagePreviewContainer.classList.remove('visible'); } };
    const removeStagedImage = (index) => { stagedImageDataUrls.splice(index, 1); fileInput.value = ''; renderImagePreviews(); };
    const clearImagePreview = () => { stagedImageDataUrls = []; fileInput.value = ''; renderImagePreviews(); };

    sendButton.addEventListener('click', sendMessage); messageInput.addEventListener('keydown', (e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); } }); document.querySelectorAll('.suggestion-cards .card').forEach(card => { card.addEventListener('click', () => { messageInput.value = card.getAttribute('data-prompt'); sendMessage(); }); }); settingsBtn.addEventListener("click", () => settingsModal.classList.add("visible")); saveSettingsBtn.addEventListener("click", saveSettings); settingsModal.addEventListener("click", e => { if (e.target === settingsModal) settingsModal.classList.remove("visible") }); chatModeRadios.forEach(radio => radio.addEventListener('change', () => { currentChatMode = document.querySelector('input[name="chatMode"]:checked').value; toggleModelSelectorState(); })); attachFileBtn.addEventListener("click", () => fileInput.click()); 
    fileInput.addEventListener("change", (event) => { const files = event.target.files; if (!files) return; const readPromises = Array.from(files).map(file => { if (!file.type.startsWith('image/')) { alert(\`File \${file.name} bukan gambar dan akan dilewati.\`); return null; } return new Promise((resolve) => { const reader = new FileReader(); reader.onload = (e) => resolve(e.target.result); reader.readAsDataURL(file); }); }).filter(p => p !== null); Promise.all(readPromises).then(newUrls => { stagedImageDataUrls.push(...newUrls); renderImagePreviews(); }); event.target.value = ''; });

    const setupSpeechRecognition = () => { const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; if (!SpeechRecognition) return voiceInputBtn.style.display = "none"; const recognition = new SpeechRecognition(); recognition.interimResults = false; recognition.lang = "id-ID"; recognition.addEventListener("result", e => { messageInput.value = Array.from(e.results).map(r => r[0]).map(t => t.transcript).join(""); sendMessage(); }); recognition.addEventListener("error", e => console.error("Speech recognition error:", e.error)); voiceInputBtn.addEventListener("click", () => { try { recognition.start(); } catch (e) { console.error("Could not start voice recognition:", e); } }); }; menuToggle.addEventListener('click', toggleSidebar); sidebarOverlay.addEventListener('click', closeSidebar); window.addEventListener('keydown', (e) => { if (e.key === 'Escape' && isSidebarOpen) closeSidebar(); }); window.addEventListener('resize', () => { if (window.innerWidth > 768 && isSidebarOpen) closeSidebar(); });
    
    // Initialization
    checkLoginStatus();
    setupSpeechRecognition();
});
`;

// Eksport handler default untuk Cloudflare Worker
export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    // Routing sederhana berdasarkan path
    switch (path) {
      case '/':
        return new Response(htmlContent, {
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
      
      case '/style.css':
        return new Response(cssContent, {
          headers: { 'Content-Type': 'text/css; charset=utf-8' },
        });

      case '/script.js':
        return new Response(jsContent, {
          headers: { 'Content-Type': 'application/javascript; charset=utf-8' },
        });
      
      default:
        // Jika path tidak cocok, kembalikan 404
        return new Response('Not Found', { status: 404 });
    }
  },
};