import { NgModule } from '@angular/core';
import {
  AlignJustify,
  ArrowRight,
  Ellipsis,
  EllipsisVertical,
  LogIn,
  LucideAngularModule,
  Moon,
  Search,
  SquarePen,
  Sun,
} from 'lucide-angular';

@NgModule({
  declarations: [],
  imports: [
    LucideAngularModule.pick({
      Search,
      SquarePen,
      AlignJustify,
      EllipsisVertical,
      Sun,
      Moon,
      Ellipsis,
      ArrowRight,
      LogIn,
    }),
  ],
  exports: [LucideAngularModule],
})
export class LucideIconsModule {}
