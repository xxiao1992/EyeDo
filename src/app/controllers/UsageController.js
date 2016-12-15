(function () {
    angular
        .module('app')
        .controller('UsageController', [
            UsageController
        ]);

    function UsageController() {
        var vm = this;

        // TODO: move data to the service
        vm.ramChartData = [{key: 'On-time', y: 768660}, { key: 'to be collected', y: 367404}, {key: 'Default', y: 41924 }];
        vm.storageChartData = [{key: 'Earning', y: 126560}, {key: 'Lost', y: 224365 }];

        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 130,
                donut: true,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['rgb(37, 207, 170)', '#E75753', 'rgb(235, 235, 235)'],
                showLabels: false,
                showLegend: false,
                title: 'Return 5%',
                margin: { top: -10, left: -10, right: -10 }
            }
        };
    }
})();
