"use client"
import SiteContent from "../Site/SiteContent";

export default function Dashboard() {
    return (
        <>
            <SiteContent>
                <div className="mainDash flexed flexed-center" style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "orange",
                    textAlign: "center",
                    backgroundColor: "red",
                }}>
                    <h1>Welcome to Mave Dashboard</h1>
                </div>
            </SiteContent>    
        </>
    );
}
