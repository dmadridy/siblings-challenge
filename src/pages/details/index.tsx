import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useEffect } from "react";
import { data } from "@/lib/constants";
import { useParams } from "react-router-dom";
import { Client, Expense } from "@/lib/types";
import { Building2 } from "lucide-react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Details() {
  const { id } = useParams();
  const [client, setClient] = useState<Client | null>(null);
  const [open, setOpen] = useState(false);
  const form = useForm<Expense>({
    defaultValues: {
      label: "",
      amount: 0,
      deductedFrom: "",
    },
  });

  function onSubmit() {
    setOpen(false);
  }

  useEffect(() => {
    const client = data.find((client) => client.id === id);
    if (client) {
      setClient(client);
    }
  }, [id]);

  return (
    <div>
      <Tabs defaultValue="details">
        <TabsList>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="expenses">Expenses</TabsTrigger>
        </TabsList>
        <TabsContent value="details">
          <div className="grid grid-cols-2 gap-4 border p-4 rounded-lg">
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500 font-medium">Client Name</p>
              <p>{client?.clientName}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500 font-medium">Date of Birth</p>
              <p>{client?.dateOfBirth}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500 font-medium">
                Date of Accident
              </p>
              <p>{client?.doa}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500 font-medium">
                Medical Status
              </p>
              <p>{client?.medicalStatus}</p>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-500 font-medium">Law Firm</p>
              <div className="flex items-center gap-2">
                <Building2 />
                <p>{client?.lawFirm}</p>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="expenses">
          <div className="flex justify-end mb-4">
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger className="border-2 border-violet-600 text-violet-600 px-4 py-2 rounded-md">
                Add Expense
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Expense</DialogTitle>
                  <DialogDescription>
                    <Form {...form}>
                      <form
                        className="flex flex-col gap-4"
                        onSubmit={form.handleSubmit(onSubmit)}
                      >
                        <FormField
                          control={form.control}
                          name="deductedFrom"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Deducted From</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="label"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Expense Label</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="amount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Amount</FormLabel>
                              <FormControl>
                                <Input {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <Button
                          className="w-fit bg-violet-600 self-center text-white"
                          type="submit"
                        >
                          Submit Expense
                        </Button>
                      </form>
                    </Form>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <DataTable columns={columns} data={client?.expenses || []} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
