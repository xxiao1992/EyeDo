(function () {
    angular
        .module('app')
        .controller('VisitorsController', [
            VisitorsController
        ]);

    function VisitorsController() {
        var vm = this;

        // TODO: move data to the service
        vm.visitorsChartData = [ {key: 'Received', y: 526}, { key: 'Paid', y: 387} ];

        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 210,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(37, 207, 170)', '#E75753'],
                showLabels: false,
                showLegend: false,
                title: 'Monthly Review',
                margin: { top: -10 }
            }
        };
    }
})();
