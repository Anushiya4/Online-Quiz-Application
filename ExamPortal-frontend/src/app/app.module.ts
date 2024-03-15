import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HomeComponent } from './pages/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { authInterceptorProvider } from './services/auth.interceptor';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './pages/admin/sidebar/sidebar.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { ViewCategoryComponent } from './components/category/view-category/view-category.component';
import { AddCategoryComponent } from './components/category/add-category/add-category.component';
import { ViewQuizComponent } from './components/quiz/view-quiz/view-quiz.component';
import { AddQuizComponent } from './components/quiz/add-quiz/add-quiz.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { UpdateQuizComponent } from './components/quiz/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from './components/question/view-questions/view-questions.component';
import { AddQuestionsComponent } from './components/question/add-questions/add-questions.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { UpdateQuestionComponent } from './components/question/update-question/update-question.component';
import { UpdateCategoryComponent } from './components/category/update-category/update-category.component';
import { UserSidebarComponent } from './pages/user/user-sidebar/user-sidebar.component';
import { LoadAllQuizComponent } from './pages/user/load-all-quiz/load-all-quiz.component';
import { InstuctionsOfQuizComponent } from './pages/user/instuctions-of-quiz/instuctions-of-quiz.component';
import { QuizStartComponent } from './pages/user/quiz-start/quiz-start.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { UserNavbarComponent } from './pages/user-navbar/user-navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    AdminHomeComponent,
    ViewCategoryComponent,
    AddCategoryComponent,
    ViewQuizComponent,
    AddQuizComponent,
    UpdateQuizComponent,
    ViewQuestionsComponent,
    AddQuestionsComponent,
    UpdateQuestionComponent,
    UpdateCategoryComponent,
    UserSidebarComponent,
    LoadAllQuizComponent,
    InstuctionsOfQuizComponent,
    QuizStartComponent,
    UserNavbarComponent,
    
    
  ],
  imports: [
 
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatSidenavModule,
  
    MatProgressSpinnerModule
  ],
  
  providers: [authInterceptorProvider,],
  bootstrap: [AppComponent],
})
export class AppModule {}
