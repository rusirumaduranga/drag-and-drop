import { Component, ViewChild } from "@angular/core";
import { CdkDropListGroup, CdkDropList, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { FormsModule } from '@angular/forms';

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // Define columns
  public newItems: number[] = [1, 2, 3];
  public processItems: number[] = [4, 5];
  public doneItems: number[] = [6];
  public newItemContent: string = ''; // Ensure this is a string


  @ViewChild(CdkDropListGroup) listGroup: CdkDropListGroup<CdkDropList>;

  // Drag and drop event handlers
  drop(event) {
    if (event.previousContainer === event.container) {
      // Rearrange items within the same container
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      // Move item to a different container
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
    }
  }
  
  addNewItem() {
    const parsedValue = parseInt(this.newItemContent, 10);
    if (!isNaN(parsedValue)) {
      this.newItems.push(parsedValue); // Only add if it's a valid number
    }
    this.newItemContent = ''; // Clear the input field
  }
  

}
