'use client'
import React from "react";
import { data as Employees } from "@/data/employees";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ApplyLeave } from "./appleLeave";

const AttendancePage = () => {
  return (
    <>
      <h1 className="text-xl font-bold mb-4">Leaves</h1>
      <div className="text-right mb-4">
        <ApplyLeave></ApplyLeave>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {Employees.map(i=>(
          <Card className="divide-y hover:shadow-lg hover:border-1 hover:border-slate-800 hover:cursor-pointer dark:hover:border-slate-500 ">
            <CardHeader>
              <CardTitle>{i.name}</CardTitle>
              <CardDescription>{i.designation}</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <h4 className="text-sm font-bold pb-2">
                Leave Balances
              </h4>

              <div className="grid grid-cols-3 gap-2 pt-2">
                <div>

                  <p className="text-sm font-medium">
                    PL
                  </p>
                    <p className="text-sm text-muted-foreground">
                    12
                    </p>
                </div>
                <div>

                  <p className="text-sm font-medium">
                    SL
                  </p>
                    <p className="text-sm text-muted-foreground">
                    12
                    </p>
                </div>
                <div>

                  <p className="text-sm font-medium">
                    EL
                  </p>
                    <p className="text-sm text-muted-foreground">
                    12
                    </p>
                </div>
              </div>
            </CardContent>
            
          </Card>
        ))}
      </div>
    </>
  );
};
export default AttendancePage;
