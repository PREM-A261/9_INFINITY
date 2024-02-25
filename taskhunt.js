document.addEventListener('DOMContentLoaded', function() {
    const signupPage = document.getElementById('signupPage');
    const loginPage = document.getElementById('loginPage');
    const taskManagementPage = document.getElementById('taskManagementPage');
    const createTaskBtn = document.getElementById('createTaskBtn');
    const taskList = document.getElementById('taskList');

    let tasks = [];
    document.addEventListener('DOMContentLoaded', function() {
        const signupPage = document.getElementById('signupPage');
        const loginPage = document.getElementById('loginPage');
        const taskPage = document.getElementById('taskPage');
    
        // Initially hide task and login pages
        taskPage.style.display = 'none';
        loginPage.style.display = 'none';
    
        // Simulated user login logic (Replace with your actual login logic)
        const loginForm = document.getElementById('loginForm');
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
    
            // Simulated login check (Replace with your actual login check)
            if (username === 'user' && password === 'password') {
                // Show the task page and hide others
                taskPage.style.display = 'block';
                loginPage.style.display = 'none';
                signupPage.style.display = 'none';
            } else {
                alert('Invalid username or password. Please try again.');
            }
        });
    
        // Other code for your tasks, signup, etc. can go here
    });
    
    // Mocked task data (replace with actual data logic)

    function showLoginPage() {
        signupPage.style.display = 'none';
        loginPage.style.display = 'block';
    }

    function showTaskManagement() {
        loginPage.style.display = 'none';
        taskManagementPage.style.display = 'block';
        displayTasks();
    }

    function displayTasks() {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskElement = document.createElement('div');
            taskElement.classList.add('task');
            taskElement.innerHTML = `
                <h3>${task.name}</h3>
                <p><strong>Assignee:</strong> ${task.assignee}</p>
                <p><strong>Due Date:</strong> ${task.dueDate}</p>
                <button class="viewTask" data-taskid="${task.id}">View Task</button>
            `;
            taskList.appendChild(taskElement);
        });
    }

    function generateId() {
        return '_' + Math.random().toString(36).substr(2, 9);
    }

    // Event listener for create task button
    createTaskBtn.addEventListener('click', function() {
        taskManagementPage.style.display = 'none';
        taskDetailPage.style.display = 'block';
    });

    // Event listener for login form
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Your login validation logic here
        // For simplicity, let's assume login is successful if both fields are not empty
        if (username.trim() !== '' && password.trim() !== '') {
            // Redirect to task management page
            showTaskManagement();
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });

    // Initially display signup page
    signupPage.style.display = 'block';
    loginPage.style.display = 'none';
    taskManagementPage.style.display = 'none';

    // Simulate a user signing up (You should replace this with your actual signup/login logic)
    setTimeout(() => {
        showLoginPage();
    }, 2000); // Simulating 2 seconds delay after page load
});
