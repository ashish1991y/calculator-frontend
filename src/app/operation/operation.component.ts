import {Component, OnInit} from '@angular/core';
import {OperationRequestBody, OperationService} from './operation.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  constructor(private operationService: OperationService) {
  }

  value1: number;
  value2: number;
  result: number;

  isError = false;
  error: any = {};

  ngOnInit(): void {
  }

  public isDisabled(button: string): boolean {
    if (button !== 'divide') {
      return !(this.value1 !== undefined && this.value1 !== null &&
        this.value2 !== undefined && this.value2 !== null);
    }
    else
      {
        return !(this.value1 !== undefined && this.value1 !== null &&
          this.value2 !== undefined && this.value2 !== null && this.value2 !== 0);
      }
  }
  public calculate(operator: string): void {
    const requestBody: OperationRequestBody = {} as OperationRequestBody;
    requestBody.firstValue = this.value1;
    requestBody.secondValue = this.value2;
    requestBody.operator = operator;
    this.operationService.performOperation(requestBody).subscribe(
      (result) => this.result = result,
      (error) => {
        this.isError = true;
        this.error = error;
      }
    );
  }

  public reset(): void {
    this.value1 = 0;
    this.value2 = 0;
    this.result = 0;
    this.isError = false;
  }

}
