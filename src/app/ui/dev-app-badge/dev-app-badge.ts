import { Component, computed, input } from '@angular/core';

export type DevAppBadgeVariant =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'green'
  | 'yellow'
  | 'red'
  | 'slate'
  | 'light';

@Component({
  selector: 'app-dev-app-badge',
  imports: [],
  template: `
    <span
      [class]="badgeClasses()"
      class="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-full border tracking-wide select-none transition-colors duration-150"
    >
      @if (icon()) {
        <i [class]="icon()" class="text-[10px] opacity-80"></i>
      }

      <span>
        {{ label() }}
      </span>
    </span>
  `,
})
export class DevAppBadge {
  readonly label = input.required<string>();
  readonly variant = input<DevAppBadgeVariant>('slate');
  readonly icon = input<string | null>(null);

  // Computes precise premium color matching rules for our system dashboard themes
  readonly badgeClasses = computed(() => {
    switch (this.variant()) {
      case 'primary':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      case 'success':
        return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'warning':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'danger':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'green':
        return 'bg-emerald-500/20 text-emerald-600 border-emerald-500/30';
      case 'yellow':
        return 'bg-yellow-400/20 text-yellow-600 border-yellow-400/30';
      case 'red':
        return 'bg-red-500/20 text-red-600 border-red-500/30';
      case 'light':
        return 'bg-slate-100 text-slate-900 border-slate-300/60';
      case 'slate':
      default:
        return 'bg-[#222E50]/60 text-slate-300 border-[#3A506B]/30';
    }
  });
}
