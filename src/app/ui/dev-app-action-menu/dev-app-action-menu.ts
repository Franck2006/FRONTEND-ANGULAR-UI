import { Component, ElementRef, HostListener, input, output, signal } from '@angular/core';

export interface DevAppMenuItem {
  id: string;
  label: string;
  icon?: string; // FontAwesome class string
  variant?: 'default' | 'danger';
}

@Component({
  selector: 'app-dev-app-action-menu',
  imports: [],
  template: `
    <div class="relative inline-block text-left">
      <button
        type="button"
        (click)="toggleMenu($event)"
        class="flex items-center justify-center w-8 h-8 rounded-lg border border-[#3A506B]/20 bg-[#1C2541]/40 text-slate-400 hover:text-slate-100 hover:bg-[#222E50] hover:border-[#3A506B]/40 transition-all duration-150 cursor-pointer focus:outline-none"
        aria-haspopup="true"
        [aria-expanded]="isOpen()"
      >
        <i class="fas fa-ellipsis-v text-xs"></i>
      </button>

      @if (isOpen()) {
        <div
          class="absolute right-0 mt-1.5 w-44 rounded-xl border border-[#3A506B]/25 bg-[#0B132B] shadow-2xl z-50 py-1.5 focus:outline-none animate-fade-in"
          role="menu"
        >
          @for (item of items(); track item.id) {
            <button
              type="button"
              (click)="handleActionClick(item, $event)"
              class="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs font-medium transition-colors duration-150 text-left cursor-pointer focus:outline-none"
              [class]="
                item.variant === 'danger'
                  ? 'text-red-400 hover:bg-red-500/10'
                  : 'text-slate-300 hover:bg-[#222E50]/60 hover:text-slate-100'
              "
              role="menuitem"
            >
              @if (item.icon) {
                <i [class]="item.icon" class="w-4 text-center text-[11px] opacity-80"></i>
              }
              <span>{{ item.label }}</span>
            </button>
          }
        </div>
      }
    </div>
  `,
  styles: [
    `
      @keyframes fadeIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      .animate-fade-in {
        animation: fadeIn 0.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      }
    `,
  ],
})
export class DevAppActionMenu {
  readonly items = input.required<DevAppMenuItem[]>();
  readonly actionTriggered = output<{ itemId: string; context: any }>();

  // Optional context context (e.g., passing down the active table row entity data)
  readonly rowContext = input<any>(null);

  readonly isOpen = signal<boolean>(false);

  constructor(private elementRef: ElementRef) {}

  toggleMenu(event: Event): void {
    event.stopPropagation();
    this.isOpen.set(!this.isOpen());
  }

  handleActionClick(item: DevAppMenuItem, event: Event): void {
    event.stopPropagation();
    this.actionTriggered.emit({ itemId: item.id, context: this.rowContext() });
    this.isOpen.set(false); // Close dropdown on execution completion
  }

  // Closes the open menu channel instantly if user clicks outside of the element
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen.set(false);
    }
  }
}
