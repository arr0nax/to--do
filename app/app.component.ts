import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div id="container" on-mouseover='openWindow()'>
    <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li *ngFor="let currentTask of tasks">{{currentTask.description}} <button (click)="randomGif()">Edit!</button></li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  tasks: Task[] = [
    new Task("Finish weekend Angular homework for Epicodus course"),
    new Task("be more specific"),
    new Task("talk to people directly")
    ];

    editTask() {
      alert("You just requested to edit a Task?");
    }

    isDone(currentTask: Task) {
      if(currentTask.done) {
      alert("This task is done!");
    } else {
      alert("This task is NOT done. Try harder.")
      }
    }

    neverLeave() {
      alert("Are you sure you want to leave this page?");
    }

    // randomGif() {
    //   var httpRequest = new XMLHttpRequest();
    //    var url = 'http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC'
    //    httpRequest.onreadystatechange = alertContents;
    //    httpRequest.open('GET', url);
    //    httpRequest.send();
    //    var gif = null;
    //    var gifUrl = null;
    //
    //    function alertContents() {
    //        if (httpRequest.readyState === XMLHttpRequest.DONE) {
    //          if (httpRequest.status === 200) {
    //            gif = httpRequest.responseText;
    //            var showGif = JSON.parse(gif);
    //            gifUrl = showGif.data.image_url;
    //          } else {
    //            alert('There was a problem with the request.');
    //          }
    //          document.getElementById('container').style.backgroundImage = 'url('+gifUrl+')');
    //        }
    //      }
    //
    // }

    openWindow() {
      var template1 = "var container = 'container'; var style = 'width:100%;height:100%';var left = Math.floor(Math.random()*1500);var top = Math.floor(Math.random()*1500);var height = Math.floor(Math.random()*1500);var width = Math.floor(Math.random()*1500); var myWindow = document.getElementById('container'); myWindow.onmouseover=function(){var newWindow = window.open('', '', 'left='+left+', top='+top+', width='+width+', height='+height);newWindow.document.write('<div id='+container+' style='+style+'><p>fart</p></div><script></script>')};</script>";
      var httpRequest = new XMLHttpRequest();
      var url = 'http://api.giphy.com/v1/stickers/random?api_key=dc6zaTOxFJmzC&tag=american+psycho'
      httpRequest.onreadystatechange = alertContents;
      httpRequest.open('GET', url);
      httpRequest.send();
      var gif = null;

      function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
          if (httpRequest.status === 200) {
            gif = httpRequest.responseText;
            console.log(gif);

          } else {
            alert('There was a problem with the request.');
          }
        }
      }
      var left = Math.floor(Math.random()*1500);
      var top = Math.floor(Math.random()*1500);
      var height = Math.floor(Math.random()*1500);
      var width = Math.floor(Math.random()*1500);
      var newWindow = window.open("", "", "left="+left+", top="+top+", width="+width+", height="+height);

      newWindow.document.write("<div id='container' style='width:100%;height:100%'><p>fart</p></div> <script>"+template1+"</script>");
    }
  }

  export class Task {
    public done: boolean = false;
    constructor(public description: string) { }
}
