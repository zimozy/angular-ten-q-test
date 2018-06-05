import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  answers = null;
  score;

  calculateScore(index) {
    this.score = 0; //reset for this attempt

    this.questions.forEach(question => {
      if (question.chosenAnswer == question.correctAnswer) {
        this.score++;
      }
    });

    alert('Score: ' + this.score + '/10\n' + (this.score >= 8 ? 'Well done, you passed.' : 'Sorry, you failed this quiz.'))
  }

  questions = [
    {
      title: 'What is an Angular directive?',
      answers: [
        'Used to determine the title of a page',
        'A class that shapes HTML code. Fundamental Angular feature',
        'Sets a listener for an object',
        'A service which runs in the background and monitors network activity'
      ],
      correctAnswer: 1
    },
    {
      title: 'What is "bootstrapping" in the context of Angular apps?',
      answers: [
        'Setting the initial view of an app',
        'Creating the application from scratch',
        'A form of data binding'
      ],
      correctAnswer: 0
    },
    {
      title: 'What is the purpose of making an app modular?',
      answers: [
        'Allows for faster compile times',
        'Pioneered by Bill Gates in 1995',
        'Makes coding more complicated. Not needed in modern development',
        'Makes coding easier, and code base easier to maintain when changing',
      ],
      correctAnswer: 3
    },
    {
      title: 'What is ECMAScript',
      answers: [
        'A variant of the Ruby programming language',
        'A variant of the JavaScript programming language',
        'The official specification of the JavaScript language',
        'A language popular in the late 80\'s'
      ],
      correctAnswer: 2
    },
    {
      title: 'Which of the following demonstrates camel case?',
      answers: [
        'CamelCase',
        'camel-case',
        'camel-Case',
        'camelCase'
      ],
      correctAnswer: 3
    },
    {
      title: 'Which one of these is a type of data binding?',
      answers: [
        'Bootstrapping',
        'Interpolation',
        'Encapsulation',
        'Design'
      ],
      correctAnswer: 1
    },
    {
      title: 'What is a decorator?',
      answers: [
        'A function that declares metadata about a class',
        'A widget on a component HTML file',
        'A CSS variable',
        'A constant that defines the structure of a class'
      ],
      correctAnswer: 0
    },
    {
      title: 'What does CLI stand for?',
      answers: [
        'Common List Injector',
        'Converted List Integer',
        'Command List Instance',
        'Command Line Interface'
      ],
      correctAnswer: 3
    },
    {
      title: 'What does dependency injection do?',
      answers: [
        'Destroys dependencies',
        'Manages dependencies',
        'Modifies dependenceies',
        'Checks dependencies for errors'
      ],
      correctAnswer: 1
    },
    {
      title: 'Which one of these is not an Angular component lifecycle event?',
      answers: [
        'ngAfterContentInit',
        'ngOnDestroy',
        'ngAfterContentChecked',
        'ngOnViewCreated'
      ],
      correctAnswer: 3
    }
  ]
}
