import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChatbotIconComponent } from './shared/chatbot-icon/chatbot-icon.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { LucideIconsModule } from './lucide-icons/lucide-icons.module';
import { ContentComponent } from './components/content/content.component';
import { TopbarComponent } from './components/layout/topbar/topbar.component';
import { GradientBorderComponent } from './shared/gradient-border/gradient-border.component';
import { ThemeToggleComponent } from './shared/theme-toggle/theme-toggle.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { ToggleSideBarComponent } from './components/layout/toggle-side-bar/toggle-side-bar.component';
import { LoginButtonComponent } from './components/Authentication/login-button/login-button.component';
import { LoginPageComponent } from './components/Authentication/login-page/login-page.component';
import { SidebarContentComponent } from './components/layout/sidebar-content/sidebar-content.component';

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
    LoginButtonComponent,
    LoginPageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, LucideIconsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
