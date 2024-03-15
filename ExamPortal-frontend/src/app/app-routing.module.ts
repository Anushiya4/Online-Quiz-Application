import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { ViewCategoryComponent } from './components/category/view-category/view-category.component';
import { AddQuestionsComponent } from './components/question/add-questions/add-questions.component';
import { UpdateQuestionComponent } from './components/question/update-question/update-question.component';
import { ViewQuestionsComponent } from './components/question/view-questions/view-questions.component';
import { AddQuizComponent } from './components/quiz/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './components/quiz/update-quiz/update-quiz.component';
import { ViewQuizComponent } from './components/quiz/view-quiz/view-quiz.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SignupComponent } from './pages/signup/signup.component';
import { InstuctionsOfQuizComponent } from './pages/user/instuctions-of-quiz/instuctions-of-quiz.component';
import { LoadAllQuizComponent } from './pages/user/load-all-quiz/load-all-quiz.component';
import { QuizStartComponent } from './pages/user/quiz-start/quiz-start.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'signup', component: SignupComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },

  {
    path: 'admin',
    component: DashboardComponent,
    canActivate: [AdminGuard],
    children: [
      {
        path: 'home',
        component: AdminHomeComponent,
      },

      { path: 'add-category', component: AddCategoryComponent },
      { path: 'view-category', component: ViewCategoryComponent },
      { path: 'update-category/:cid', component: UpdateCategoryComponent },
      { path: 'add-quiz', component: AddQuizComponent },
      { path: 'view-quiz', component: ViewQuizComponent },
      { path: 'update-quiz/:qid', component: UpdateQuizComponent },
      { path: 'add-question/:qid/:qtitle', component: AddQuestionsComponent },
      { path: 'view-question/:qid/:qtitle', component: ViewQuestionsComponent },
      { path: 'update-question/:quesId', component: UpdateQuestionComponent },
    ],
  },
  {
    path: 'user',
    component: UserDashboardComponent,
    canActivate: [UserGuard],
    children: [
      {
        path: ':cid',
        component: LoadAllQuizComponent, //cid=categoryId
      },
      {
        path: 'instructions/:qid',
        component: InstuctionsOfQuizComponent,
      },
    ],
  },
  {
    path: 'quizStart/:qid',
    component: QuizStartComponent,
    canActivate: [UserGuard],
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
