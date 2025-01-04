import React from "react";
import ReactDOM from "react-dom/client";
import {Provider} from "react-redux";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import App from "./App";
import {ErrorBoundary} from "react-error-boundary";
import ErrorFallback from "./shared/ui/ErrorFallback";
import store from "./store";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <ErrorBoundary
                    FallbackComponent={ErrorFallback}
                    onReset={() => window.location.replace("/")}
                >
                    <DevSupport ComponentPreviews={ComponentPreviews}
                                useInitialHook={useInitial}
                    >
                        <App/>
                    </DevSupport>
                </ErrorBoundary>
                <ReactQueryDevtools initialIsOpen={false}/>
            </Provider>
        </QueryClientProvider>
    </React.StrictMode>
);
