// Progress bar component
app.component('myProgressBar', {
    template: `<div class="col-xs-2">{{$ctrl.title}}</div>
                <div class="col-xs-10">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-valuenow="{{$ctrl.progress | number:1}}" aria-valuemin="0" aria-valuemax="100" style="width:{{$ctrl.progress | number:1}}%">
                        <span>{{$ctrl.progress | number:1}}%</span>
                        </div>
                    </div>
                </div>`,
    bindings: {
        title: '@',
        progress: '@'
    }
});
