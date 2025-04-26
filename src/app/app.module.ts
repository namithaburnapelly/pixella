import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChatbotIconComponent } from './shared/chatbot-icon/chatbot-icon.component';
import { SidebarComponent } from './components/sidebar_components/sidebar/sidebar.component';
import { LucideIconsModule } from './lucide-icons/lucide-icons.module';
import { ContentComponent } from './components/content/content.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { GradientBorderComponent } from './shared/gradient-border/gradient-border.component';
import { ThemeToggleComponent } from './shared/theme-toggle/theme-toggle.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { ToggleSideBarComponent } from './components/sidebar_components/toggle-side-bar/toggle-side-bar.component';
import { LoginPageComponent } from './components/Authentication/login-page/login-page.component';
import { SidebarContentComponent } from './components/sidebar_components/sidebar-content/sidebar-content.component';
import { SignupPageComponent } from './components/Authentication/signup-page/signup-page.component';
import { BrandNameComponent } from './shared/brand-name/brand-name.component';
import { NewChatComponent } from './components/new-chat/new-chat.component';
import { JwtModule } from '@auth0/angular-jwt';
import { JWT_Module_Options } from './utils/jwt.auth';
import { AuthService } from './Service/Authentication/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { LoadingComponent } from './shared/loading/loading.component';
import { ErrorHandlerService } from './utils/error.handler';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChatbotIconComponent,
    SidebarComponent,
    ContentComponent,
    TopbarComponent,
    GradientBorderComponent,
    ThemeToggleComponent,
    ProfileComponent,
    ToggleSideBarComponent,
    SidebarContentComponent,
    LoginPageComponent,
    SignupPageComponent,
    BrandNameComponent,
    NewChatComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideIconsModule,
    JwtModule.forRoot(JWT_Module_Options),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    //provide custom error handler class to app module
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    AuthService,
    provideHttpClient(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
