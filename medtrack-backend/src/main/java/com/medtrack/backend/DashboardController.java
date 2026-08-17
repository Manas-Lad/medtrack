package com.medtrack.backend;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Map;

@RestController
@RequestMapping("/api/hospital")
@CrossOrigin(origins = "*")
public class DashboardController {

    @GetMapping("/overview/kpis")
    public Map<String, Object> getOverviewKpis() {
        return Map.of(
            "totalStockValue", "$2.4M",
            "totalStockValueTrend", "+4.2%",
            "itemsBelowPar", 42,
            "itemsBelowParTrend", "+12",
            "activeOrders", 156,
            "activeOrdersArrivingToday", 24,
            "recentDeliveries", 89
        );
    }
}
