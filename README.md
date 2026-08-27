# Modular Client-Side Tracking & sGTM Server-to-Server Proxy Architecture

This repository serves as a technical portfolio project demonstrating advanced enterprise-grade marketing technology tracking. It separates browser-side telemetry from server distribution loops to bypass network ad-blockers and privacy sandboxes.

## 1. Architecture Overview
- **Client Engine:** Modular scripts capture runtime business contexts (currency schemas, arrays) into a frozen window state.
- **Data Layer:** Standardized GA4 e-commerce payload generation.
- **Server Proxy:** Intercepts runtime arrays and streams them server-to-server (S2S) via Google Tag Manager Server Containers.

## 2. Server-to-Server Configuration Steps
To process this framework via an active marketing cloud proxy, configure the Google Tag Manager environments as detailed below:

### Step A: GTM Client-Side Container Interception
1. Create an **Event Trigger** matching custom event name `purchase`.
2. Establish **Data Layer Variables** for `ecommerce.value`, `ecommerce.currency`, and `ecommerce.items`.
3. Create a **Custom HTML Tag** utilizing the asynchronous Beacon framework to deliver payload structures to your server destination without blocking page layouts:
