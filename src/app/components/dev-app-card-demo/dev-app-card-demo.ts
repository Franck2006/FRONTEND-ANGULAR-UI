import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DevAppCard, DevAppCardCourse } from '../../ui/dev-app-card/dev-app-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dev-app-card-demo',
  imports: [RouterModule, DevAppCard, CommonModule],
  standalone: true,
  template: `
    <div class="p-6 bg-[#090E1B] min-h-screen text-slate-100">
      <h2 class="text-2xl font-bold mb-6">Course Card Demo</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  mx-auto">
        <div *ngFor="let item of sampleCourse">
          <app-dev-app-card [course]="item"></app-dev-app-card>
        </div>
      </div>
    </div>
  `,
})
export class DevAppCardDemo {
  readonly sampleCourse: DevAppCardCourse[] = [
    {
      id: 'course-001',
      title: 'Mastering Angular Signals',
      imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
      level: 'Beginner',
      topic: 'Angular',
      coachName: 'Sophie Lee',
      coachAvatar: null,
      rating: 4.8,
      reviews: 128,
      lessonsCount: 22,
    },
    {
      id: 'course-001',
      title: 'Mastering Angular Signals',
      imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
      level: 'Beginner',
      topic: 'Angular',
      coachName: 'Sophie Lee',
      coachAvatar: null,
      rating: 4.8,
      reviews: 128,
      lessonsCount: 22,
    },
    {
      id: 'course-001',
      title: 'Mastering Angular Signals',
      imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=1200&q=80',
      level: 'Beginner',
      topic: 'Angular',
      coachName: 'Sophie Lee',
      coachAvatar: null,
      rating: 4.8,
      reviews: 128,
      lessonsCount: 22,
    }
  ]
}
