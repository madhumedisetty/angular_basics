import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildComponent } from './child.component';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ChildComponent], // Import necessary modules
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'angularfirst'; // Title of the app
  bio = 'I am a software engineer'; // Bio

  tasks = ['task1', 'task2', 'task3']; // Sample tasks

  parentMessage = 'madhuri is trying to learn Angular'; // Message to child

  // Todo-related properties
  todos: Todo[] = [
    { id: 1, text: 'Learn Angular', completed: false },
    { id: 2, text: 'Build a project', completed: false },
    { id: 3, text: 'Deploy the project', completed: false },
  ];
  newTodoText: string = ''; // Text for new todo input
  nextId: number = 4; // ID counter for new todos

  ngOnInit(): void {
    console.log('AppComponent initialized');
  }

  ngOnDestroy(): void {
    console.log('AppComponent destroyed');
  }

  // Update new todo text from input field
  updateNewTodo(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.newTodoText = input.value;
  }

  // Add a new todo to the list
  addTodo(): void {
    if (this.newTodoText.trim() === '') return; // Avoid empty todos

    this.todos.push({
      id: this.nextId++,
      text: this.newTodoText,
      completed: false,
    });

    this.newTodoText = ''; // Clear the input field
  }

  // Toggle completion status of a todo
  toggleTodoCompletion(todo: Todo): void {
    todo.completed = !todo.completed; // Toggle boolean
  }

  // Delete a todo from the list
  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }

  // Get the count of completed todos
  getCompletedTodosCount(): number {
    return this.todos.filter((todo) => todo.completed).length;
  }

  // Handle response from child component
  handleResponse(response: string): void {
    this.parentMessage = response;
  }
}
