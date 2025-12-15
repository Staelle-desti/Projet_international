// Récupère les données de l'utilisateur depuis le localStorage (simulé après login)
document.addEventListener('DOMContentLoaded', () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        document.getElementById('username').textContent = user.username;
        document.getElementById('email').textContent = `Email: ${user.email}`;
        document.getElementById('last-login').textContent = `Dernière connexion: ${new Date().toLocaleString()}`;
    } else {
        // window.location.href = 'login.html'; // Redirige vers le login si pas connecté
    }
});

document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simule une connexion réussie
    localStorage.setItem('user', JSON.stringify({ username, email: `${username}@example.com` }));

    // Redirige vers chat.html
    window.location.href = 'chat.html';
});


// Simule la récupération des notifications
document.addEventListener('DOMContentLoaded', () => {
    const notifications = [
        { title: "Nouveau message de Jean", message: "Tu as un nouveau SMS non lu.", time: "Il y a 2 minutes" },
        { title: "Rappel", message: "N'oublie pas ta réunion à 15h.", time: "Il y a 1 heure" }
    ];

    const list = document.getElementById('notifications-list');
    notifications.forEach(notif => {
        const div = document.createElement('div');
        div.className = 'notification';
        div.innerHTML = `
            <h3>${notif.title}</h3>
            <p>${notif.message}</p>
            <small>${notif.time}</small>
        `;
        list.appendChild(div);
    });
});

// Simule l'envoi et la réception de messages
document.getElementById('chat-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    if (message) {
        const chat = document.getElementById('chat-messages');
        const div = document.createElement('div');
        div.textContent = `Moi: ${message}`;
        chat.appendChild(div);
        input.value = '';
        // Simule une réponse
        setTimeout(() => {
            const reply = document.createElement('div');
            reply.textContent = `Bot: Message reçu: "${message}"`;
            chat.appendChild(reply);
        }, 1000);
    }
});
