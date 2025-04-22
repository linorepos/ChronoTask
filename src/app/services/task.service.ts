import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasksUrl = 'http://localhost:5000/tasks';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.tasksUrl);
  }

  deleteTasks(task: Task): Observable<Task> {
    const url = `${this.tasksUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.tasksUrl, task, this.httpOptions);
  }
}
