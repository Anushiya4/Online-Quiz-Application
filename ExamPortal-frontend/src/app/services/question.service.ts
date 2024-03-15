import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const baseUrl = 'http://localhost:8080/question';
@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private http: HttpClient) {}
  public getQuestionsOfQuiz(qid: any) {
    return this.http.get(`${baseUrl}/quiz/all/${qid}`);
  }
  public getQuestionsOfQuizForUser(qid: any) {
    return this.http.get(`${baseUrl}/quiz/${qid}`);
  }
  public addQuestion(data: any) {
    return this.http.post(`${baseUrl}/`, data);
  }
  public deleteQuestion(quesId: any) {
    return this.http.delete(`${baseUrl}/${quesId}`);
  }
  public getQuestion(quesId:any){
    return this.http.get(`${baseUrl}/${quesId}`);
  }
  public updateQuestion(data: any) {
    return this.http.put(`${baseUrl}/`, data);
  }
}
