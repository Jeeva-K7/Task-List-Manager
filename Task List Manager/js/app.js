angular.module('taskManagerApp', [])
    .controller('TaskController', function($scope, $interval) {
        var vm = this;
        vm.lists = []; // Initialize an empty array to store lists
        vm.newList = ''; // Variable to hold the new list input

        // Function to add a new list
        vm.addList = function() {
            if (vm.newList !== '') {
                vm.lists.push({ name: vm.newList, tasks: [], newTask: '' });
                vm.newList = ''; // Clear the input field after adding the list
            }
        };

        // Function to add a new task to a specific list
        vm.addTask = function(list) {
            if (list.newTask !== '') {
                list.tasks.push({ name: list.newTask, editing: false, completed: false });
                list.newTask = ''; // Clear the input field after adding the task
            }
        };

        // Function to toggle task completion
        vm.toggleTaskCompletion = function(task) {
            task.completed = !task.completed;
        };

        // Function to edit a task
        vm.editTask = function(task) {
            if (!task.editing) {
                task.editing = true;
                // Save the original name to allow cancelling
                task.updatedName = task.name;
            }
        };

        // Function to save edited task
        vm.saveTask = function(task) {
            task.editing = false;
        };

        // Function to cancel editing
        vm.cancelEdit = function(task) {
            task.name = task.updatedName;
            task.editing = false;
        };

        // Function to delete a task
        vm.deleteTask = function(task, list) {
            var index = list.tasks.indexOf(task);
            list.tasks.splice(index, 1);
        };

        // Function to toggle task editing
        vm.toggleEditTask = function(task) {
            if (!task.editing) {
                // Enter editing mode
                task.editing = true;
                // Save the original name to allow cancelling
                task.updatedName = task.name;
            } else {
                // Exit editing mode and save changes
                task.name = task.updatedName;
                task.editing = false;
            }
        };

        // Function to delete a list
        vm.deleteList = function(list) {
            var index = vm.lists.indexOf(list);
            vm.lists.splice(index, 1);
        };

        // Function to edit a list name
        vm.editListName = function(list) {
            if (!list.editingName) {
                list.editingName = true;
                // Save the original name to allow cancelling
                list.updatedName = list.name;
            }
        };

        // Function to save edited list name
        vm.saveListName = function(list) {
            list.name = list.updatedName; // Update the list name with the updatedName
            list.editingName = false; // Disable editing mode
        };

        // Function to cancel editing list name
        vm.cancelEditListName = function(list) {
            list.name = list.updatedName; // Revert to the original name
            list.editingName = false; // Disable editing mode
        };
    });
