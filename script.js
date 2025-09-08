// Armazenamento local para simular banco de dados
const users = JSON.parse(localStorage.getItem('users')) || [];

// Sistema de tradução
const translations = {
    pt: {
        hero: {
            title: "Sustentável, Inteligente e Verde",
            subtitle: "Transforme resíduos em recursos através do nosso sistema inteligente de reciclagem. Faça parte da revolução sustentável!"
        },
        nav: {
            terms: "Termos",
            contact: "Contato"
        },
        login: {
            title: "Entrar",
            subtitle: "Sistema de Reciclagem Inteligente",
            button: "Entrar",
            no_account: "Não tem uma conta?",
            signup_link: "Cadastrar-se"
        },
        signup: {
            title: "Cadastrar",
            subtitle: "Sistema de Reciclagem Inteligente",
            button: "Cadastrar",
            has_account: "Já tem uma conta?",
            login_link: "Fazer Login"
        },
        form: {
            email: "Email",
            password: "Senha",
            confirm_password: "Repetir Senha",
            password_hint: "Use 8 ou mais caracteres com uma mistura de letras, números e símbolos.",
            accept_terms: "Eu aceito os",
            terms_link: "Termos",
            or_with: "Ou com"
        },
        social: {
            google_login: "Entrar com Google",
            apple_login: "Entrar com Apple",
            google_signup: "Cadastrar com Google",
            apple_signup: "Cadastrar com Apple"
        },
        messages: {
            login_success: "Login Realizado!",
            login_welcome: "Bem-vindo de volta ao sistema de reciclagem",
            signup_success: "Cadastro Realizado!",
            signup_welcome: "Sua conta no sistema de reciclagem foi criada com sucesso!",
            coming_soon: "Em Desenvolvimento",
            social_coming_soon: "Login com {provider} para o sistema de reciclagem será implementado em breve!"
        }
    },
    en: {
        hero: {
            title: "Sustainable, Smart and Green",
            subtitle: "Transform waste into resources through our intelligent recycling system. Be part of the sustainable revolution!"
        },
        nav: {
            terms: "Terms",
            contact: "Contact"
        },
        login: {
            title: "Sign In",
            subtitle: "Intelligent Recycling System",
            button: "Sign In",
            no_account: "Don't have an account?",
            signup_link: "Sign Up"
        },
        signup: {
            title: "Sign Up",
            subtitle: "Intelligent Recycling System",
            button: "Sign Up",
            has_account: "Already have an account?",
            login_link: "Sign In"
        },
        form: {
            email: "Email",
            password: "Password",
            confirm_password: "Confirm Password",
            password_hint: "Use 8 or more characters with a mix of letters, numbers & symbols.",
            accept_terms: "I accept the",
            terms_link: "Terms",
            or_with: "Or with"
        },
        social: {
            google_login: "Sign in with Google",
            apple_login: "Sign in with Apple",
            google_signup: "Sign up with Google",
            apple_signup: "Sign up with Apple"
        },
        messages: {
            login_success: "Login Successful!",
            login_welcome: "Welcome back to the recycling system",
            signup_success: "Registration Successful!",
            signup_welcome: "Your recycling system account has been created successfully!",
            coming_soon: "Coming Soon",
            social_coming_soon: "Login with {provider} for the recycling system will be implemented soon!"
        }
    },
    es: {
        hero: {
            title: "Sostenible, Inteligente y Verde",
            subtitle: "Transforma residuos en recursos a través de nuestro sistema inteligente de reciclaje. ¡Sé parte de la revolución sostenible!"
        },
        nav: {
            terms: "Términos",
            contact: "Contacto"
        },
        login: {
            title: "Iniciar Sesión",
            subtitle: "Sistema Inteligente de Reciclaje",
            button: "Iniciar Sesión",
            no_account: "¿No tienes una cuenta?",
            signup_link: "Registrarse"
        },
        signup: {
            title: "Registrarse",
            subtitle: "Sistema Inteligente de Reciclaje",
            button: "Registrarse",
            has_account: "¿Ya tienes una cuenta?",
            login_link: "Iniciar Sesión"
        },
        form: {
            email: "Email",
            password: "Contraseña",
            confirm_password: "Confirmar Contraseña",
            password_hint: "Usa 8 o más caracteres con una mezcla de letras, números y símbolos.",
            accept_terms: "Acepto los",
            terms_link: "Términos",
            or_with: "O con"
        },
        social: {
            google_login: "Iniciar con Google",
            apple_login: "Iniciar con Apple",
            google_signup: "Registrarse con Google",
            apple_signup: "Registrarse con Apple"
        },
        messages: {
            login_success: "¡Inicio de Sesión Exitoso!",
            login_welcome: "Bienvenido de vuelta al sistema de reciclaje",
            signup_success: "¡Registro Exitoso!",
            signup_welcome: "¡Tu cuenta en el sistema de reciclaje ha sido creada exitosamente!",
            coming_soon: "Próximamente",
            social_coming_soon: "¡El inicio de sesión con {provider} para el sistema de reciclaje será implementado pronto!"
        }
    }
};

// Idioma atual
let currentLanguage = localStorage.getItem('language') || 'pt';

// Função para traduzir elementos
function translatePage() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = getTranslation(key);
        if (translation) {
            if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = translation;
            } else if (element.tagName === 'A') {
                element.textContent = translation;
            } else {
                element.textContent = translation;
            }
        }
    });
}

// Função para obter tradução
function getTranslation(key) {
    const keys = key.split('.');
    let translation = translations[currentLanguage];
    
    for (const k of keys) {
        if (translation && translation[k]) {
            translation = translation[k];
        } else {
            return null;
        }
    }
    
    return translation;
}

// Função para alternar dropdown de idioma
function toggleLanguageDropdown() {
    const dropdown = document.getElementById('language-dropdown');
    const selector = document.querySelector('.language-selector');
    
    dropdown.classList.toggle('show');
    selector.classList.toggle('active');
}

// Função para trocar idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Atualizar bandeira e texto do seletor
    const flagMap = {
        'pt': 'https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg',
        'en': 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg',
        'es': 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg'
    };
    
    const languageMap = {
        'pt': 'Português',
        'en': 'English',
        'es': 'Español'
    };
    
    document.getElementById('current-flag').src = flagMap[lang];
    document.getElementById('current-language').textContent = languageMap[lang];
    
    // Traduzir página
    translatePage();
    
    // Fechar dropdown
    toggleLanguageDropdown();
    
    // Atualizar títulos dos formulários
    updateFormTitles();
}

// Função para atualizar títulos dos formulários
function updateFormTitles() {
    const formTitle = document.getElementById('form-title');
    const formSubtitle = document.getElementById('form-subtitle');
    
    if (loginForm.classList.contains('active')) {
        formTitle.textContent = getTranslation('login.title');
        formSubtitle.textContent = getTranslation('login.subtitle');
    } else {
        formTitle.textContent = getTranslation('signup.title');
        formSubtitle.textContent = getTranslation('signup.subtitle');
    }
}

// Elementos do DOM
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const formTitle = document.getElementById('form-title');
const formSubtitle = document.getElementById('form-subtitle');
const successModal = document.getElementById('success-modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');

// Função para alternar entre login e cadastro
function switchToSignup() {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
    updateFormTitles();
}

function switchToLogin() {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
    updateFormTitles();
}

// Função para alternar visibilidade da senha
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const icon = input.nextElementSibling;
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

// Função para mostrar/ocultar modal
function showModal(title, message) {
    modalTitle.textContent = title;
    modalMessage.textContent = message;
    successModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    successModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Função para validar email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Função para validar senha
function validatePassword(password) {
    const minLength = 8;
    const hasLetter = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    return {
        isValid: password.length >= minLength && hasLetter && hasNumber && hasSymbol,
        errors: {
            length: password.length < minLength,
            letter: !hasLetter,
            number: !hasNumber,
            symbol: !hasSymbol
        }
    };
}

// Função para mostrar erros de validação
function showFieldError(input, message) {
    const inputGroup = input.closest('.input-group');
    inputGroup.classList.add('error');
    input.classList.add('error');
    
    // Remove mensagem de erro existente
    const existingError = inputGroup.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Adiciona nova mensagem de erro
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    inputGroup.appendChild(errorDiv);
}

// Função para limpar erros de validação
function clearFieldError(input) {
    const inputGroup = input.closest('.input-group');
    inputGroup.classList.remove('error');
    input.classList.remove('error');
    
    const errorMessage = inputGroup.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

// Função para adicionar estado de loading ao botão
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.classList.add('loading');
        button.disabled = true;
        button.textContent = 'Carregando...';
    } else {
        button.classList.remove('loading');
        button.disabled = false;
        button.textContent = button.dataset.originalText || 'Entrar';
    }
}

// Event listener para formulário de login
loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const submitButton = this.querySelector('.btn-primary');
    
    // Limpar erros anteriores
    clearFieldError(document.getElementById('login-email'));
    clearFieldError(document.getElementById('login-password'));
    
    // Validações
    let hasErrors = false;
    
    if (!email) {
        showFieldError(document.getElementById('login-email'), 'Email é obrigatório');
        hasErrors = true;
    } else if (!validateEmail(email)) {
        showFieldError(document.getElementById('login-email'), 'Email inválido');
        hasErrors = true;
    }
    
    if (!password) {
        showFieldError(document.getElementById('login-password'), 'Senha é obrigatória');
        hasErrors = true;
    }
    
    if (hasErrors) return;
    
    // Simular loading
    setButtonLoading(submitButton, true);
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Verificar credenciais
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Login bem-sucedido
        localStorage.setItem('currentUser', JSON.stringify(user));
        showModal(getTranslation('messages.login_success'), `${getTranslation('messages.login_welcome')}, ${user.email}!`);
        
        // Redirecionar após 2 segundos
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    } else {
        // Credenciais inválidas
        showFieldError(document.getElementById('login-password'), 'Email ou senha incorretos');
        setButtonLoading(submitButton, false);
    }
});

// Event listener para formulário de cadastro
signupForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;
    const terms = document.getElementById('terms').checked;
    const submitButton = this.querySelector('.btn-primary');
    
    // Limpar erros anteriores
    clearFieldError(document.getElementById('signup-email'));
    clearFieldError(document.getElementById('signup-password'));
    clearFieldError(document.getElementById('signup-confirm-password'));
    
    // Validações
    let hasErrors = false;
    
    if (!email) {
        showFieldError(document.getElementById('signup-email'), 'Email é obrigatório');
        hasErrors = true;
    } else if (!validateEmail(email)) {
        showFieldError(document.getElementById('signup-email'), 'Email inválido');
        hasErrors = true;
    } else if (users.find(u => u.email === email)) {
        showFieldError(document.getElementById('signup-email'), 'Este email já está cadastrado');
        hasErrors = true;
    }
    
    if (!password) {
        showFieldError(document.getElementById('signup-password'), 'Senha é obrigatória');
        hasErrors = true;
    } else {
        const passwordValidation = validatePassword(password);
        if (!passwordValidation.isValid) {
            let errorMsg = 'A senha deve ter pelo menos 8 caracteres';
            if (passwordValidation.errors.letter) errorMsg += ', letras';
            if (passwordValidation.errors.number) errorMsg += ', números';
            if (passwordValidation.errors.symbol) errorMsg += ' e símbolos';
            showFieldError(document.getElementById('signup-password'), errorMsg);
            hasErrors = true;
        }
    }
    
    if (!confirmPassword) {
        showFieldError(document.getElementById('signup-confirm-password'), 'Confirmação de senha é obrigatória');
        hasErrors = true;
    } else if (password !== confirmPassword) {
        showFieldError(document.getElementById('signup-confirm-password'), 'As senhas não coincidem');
        hasErrors = true;
    }
    
    if (!terms) {
        alert('Você deve aceitar os termos para continuar');
        hasErrors = true;
    }
    
    if (hasErrors) return;
    
    // Simular loading
    setButtonLoading(submitButton, true);
    
    // Simular delay de API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Criar novo usuário
    const newUser = {
        id: Date.now(),
        email: email,
        password: password,
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Cadastro bem-sucedido
    showModal(getTranslation('messages.signup_success'), getTranslation('messages.signup_welcome'));
    
    // Alternar para login após 2 segundos
    setTimeout(() => {
        switchToLogin();
        document.getElementById('login-email').value = email;
        setButtonLoading(submitButton, false);
    }, 2000);
});

// Event listeners para botões sociais
document.querySelectorAll('.btn-social').forEach(button => {
    button.addEventListener('click', function() {
        const isGoogle = this.textContent.includes('Google');
        const action = this.textContent.includes('Entrar') ? 'login' : 'signup';
        
        const provider = isGoogle ? 'Google' : 'Apple';
        const message = getTranslation('messages.social_coming_soon').replace('{provider}', provider);
        showModal(getTranslation('messages.coming_soon'), message);
    });
});

// Event listeners para limpar erros ao digitar
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        clearFieldError(this);
    });
});

// Fechar modal ao clicar fora dele
successModal.addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

// Fechar dropdown ao clicar fora dele
document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('language-dropdown');
    const selector = document.querySelector('.language-selector');
    
    if (!selector.contains(e.target) && dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
        selector.classList.remove('active');
    }
});

// Fechar modal com ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && successModal.style.display === 'block') {
        closeModal();
    }
});

// Animações de entrada
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    // Traduzir página ao carregar
    translatePage();
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Função para verificar se usuário já está logado
function checkLoggedInUser() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
        showModal('Já Logado', 'Você já está logado no sistema!');
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 2000);
    }
}

// Verificar login ao carregar a página
checkLoggedInUser();

// Função para logout (caso seja necessário)
function logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Adicionar efeitos visuais aos inputs
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
        this.parentElement.style.transition = 'transform 0.2s ease';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Adicionar efeito de hover nos botões
document.querySelectorAll('.btn-primary, .btn-social').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Salvar texto original dos botões para loading
document.querySelectorAll('.btn-primary').forEach(button => {
    button.dataset.originalText = button.textContent;
});

console.log('Sistema de reciclagem carregado com sucesso! 🌱♻️');
