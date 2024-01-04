"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskTracker = void 0;
var TaskTracker = /** @class */ (function () {
    function TaskTracker() {
        this.tasks = [];
    }
    TaskTracker.prototype.addTask = function (task) {
        this.tasks.push(task);
    };
    TaskTracker.prototype.editTask = function (taskId, updatedTask) {
        var taskIndex = this.tasks.findIndex(function (task) { return task.id === taskId; });
        if (taskIndex !== -1) {
            this.tasks[taskIndex] = __assign(__assign({}, this.tasks[taskIndex]), updatedTask);
        }
        else {
            console.error("Tarefa com ID ".concat(taskId, " n\u00E3o encontrada."));
        }
    };
    TaskTracker.prototype.deleteTask = function (taskId) {
        this.tasks = this.tasks.filter(function (task) { return task.id !== taskId; });
    };
    TaskTracker.prototype.getTasks = function () {
        return __spreadArray([], this.tasks, true);
    };
    return TaskTracker;
}());
exports.TaskTracker = TaskTracker;
