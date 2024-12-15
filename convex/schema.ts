import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        userId: v.string(),
        email: v.string(),
        name: v.string(),
    }).index("by_user_id", ["userId"]),
});
