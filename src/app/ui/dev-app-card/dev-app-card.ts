import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDevBtn } from '../app-dev-btn/app-dev-btn';
import { DevAppBadge } from '../dev-app-badge/dev-app-badge';

export interface DevAppCardCourse {
    id: string;
    title: string;
    imageUrl: string;
    level: string;
    topic: string;
    coachName: string;
    coachAvatar?: string | null;
    rating: number | string;
    reviews: number | string;
    lessonsCount: number | string;
}

@Component({
    selector: 'app-dev-app-card',
    imports: [RouterModule, AppDevBtn, DevAppBadge],
    standalone: true,
    template: `
    <div
      class="bg-slate-800 rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow"
    >
      <!-- Image Section -->
      <div class="relative bg-slate-600">
        <img
          [src]="course().imageUrl"
          alt="Course Image"
          class="w-full h-48 object-cover rounded-t-lg"
        />
        <div class="absolute top-4 left-4">
          <app-dev-app-badge [label]="course().level" variant="warning"></app-dev-app-badge>
        </div>
        <div class="absolute top-4 right-4">
          <app-dev-app-badge [label]="course().topic" variant="green"></app-dev-app-badge>
        </div>
      </div>

      <!-- Content Section -->
      <div class="p-6">
        <h3 class="text-xl font-semibold text-white mb-2 capitalize">{{ course().title }}</h3>

        <div class="flex items-center gap-3 mb-4">
          <div
            class="relative h-8 w-8 overflow-hidden rounded-full border border-slate-600 bg-slate-700"
          >
            @if (course().coachAvatar) {
              <img
                [src]="course().coachAvatar"
                alt="Coach"
                class="h-full w-full object-cover"
              />
            } @else {
              <div
                class="flex h-full w-full items-center justify-center text-[10px] font-bold uppercase"
              >
                {{ course().coachName.substring(0, 2) }}
              </div>
            }
          </div>
          <p class="text-sm font-medium text-slate-300 capitalize">{{ course().coachName }}</p>
        </div>

        <div class="flex items-center justify-between mb-4">
          <div class="flex items-center">
            <svg class="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
            <span class="ml-1 text-sm text-slate-400">{{ course().rating }} ({{ course().reviews }})</span>
          </div>
          <span class="text-sm text-slate-400">{{ course().lessonsCount }} lessons</span>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 rounded-full flex items-center justify-center bg-blue-100">
              <svg
                class="w-4 h-4 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                ></path>
              </svg>
            </div>
            <span class="text-sm text-slate-300">Course Path</span>
          </div>
          <app-app-dev-btn
            [variant]="'primary'"
            [size]="'md'"
            [type]="'button'"
            [disabled]="false"
            [loading]="false"
            [routerLink]="['/all-course-pannel/lessons-list', course().id]"
          >
            View Lessons
          </app-app-dev-btn>
        </div>
      </div>
    </div>
  `,
})
export class DevAppCard {
    readonly course = input.required<DevAppCardCourse>();
}
